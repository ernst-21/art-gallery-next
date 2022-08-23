import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { IArtwork } from '../../../interfaces';
import { Artwork } from '../../../models';
import { getSession } from 'next-auth/react';
import isEmpty from 'lodash/isEmpty';

type Data = { message: string } | IArtwork[];

export default async function getArtworksByFilter(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return getArtworks(req, res);
    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

const generateQueryFilter = (filter: any, userId: string) => {
  const arrayOfFilters: any = [
    { featured: { $in: false } },
    { purchased: { $nin: userId } },
  ];
  Object.keys(filter).map((key) => {
    if (key === 'price') {
      arrayOfFilters.push({
        price: {
          $gt: filter['price'][0],
          $lt: filter['price'][1],
        },
      });
    }
    if (key === 'voters') {
      arrayOfFilters.push({
        $expr: { $gte: [{ $size: '$voters' }, filter[key][0]] },
      });
      arrayOfFilters.push({
        $expr: { $lte: [{ $size: '$voters' }, filter[key][1]] },
      });
    }
    if (key !== 'voters' && key !== 'price') {
      const filterElement = Object.create({});
      filterElement[key] = { $in: filter[key] };
      arrayOfFilters.push(filterElement);
    }
  });
  return arrayOfFilters;
};

const getArtworks = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { filter = {} } = req.body;

  const session: any = await getSession({ req });
  const userId = session?.user._id;

  await db.connect();

  if (isEmpty(filter)) {
    try {
      const artworks = await Artwork.find({
        $and: [{ purchased: { $nin: userId } }, { featured: { $in: false } }],
      })
        .select(
          '_id name artist artist_Id description category price tags colors gallery featured orientation url size purchased voters'
        )
        .lean();

      await db.disconnect();
      return res.status(200).json(artworks);
    } catch (err: any) {
      if (err) {
        res.status(422).json({ message: err });
      }
    }
  }

  try {
    const artworks = await Artwork.find({
      $and: generateQueryFilter(filter, userId),
    })
      .select(
        '_id name artist artist_Id description category price tags colors gallery featured orientation url size purchased voters'
      )
      .lean();

    await db.disconnect();

    return res.status(200).json(artworks);
  } catch (err: any) {
    if (err) {
      res.status(422).json({ message: err });
    }
  }
};
