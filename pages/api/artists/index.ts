import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { IArtist } from '../../../interfaces';
import { Artist } from '../../../models';
import isEmpty from 'lodash/isEmpty';

type Data = { message: string } | IArtist[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return getArtists(req, res);
    case 'POST':
      return getArtistsByFilter(req, res);
    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

const getArtists = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  try {
    let foundArtist = await Artist.find().select(
      'name artworks category _id discipline likes recommended pic country'
    );

    await db.disconnect();

    return res.json(foundArtist);
  } catch (err: any) {
    return res.status(422).json({ message: err });
  }
};

const generateQueryFilter = (filter: any) => {
  const arrayOfFilters: any = [];

  Object.keys(filter).map((key) => {
    if (key === 'likes') {
      arrayOfFilters.push({
        $expr: { $gte: [{ $size: '$likes' }, filter[key][0]] },
      });
      arrayOfFilters.push({
        $expr: { $lte: [{ $size: '$likes' }, filter[key][1]] },
      });
    }
    if (key !== 'likes') {
      const filterElement = Object.create({});
      filterElement[key] = { $in: filter[key] };
      arrayOfFilters.push(filterElement);
    }
  });
  return arrayOfFilters;
};

const getArtistsByFilter = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { filter = {} } = req.body;

  await db.connect();

  if (isEmpty(filter)) {
    try {
      const artists = await Artist.find().select(
        'name artworks category _id discipline likes recommended pic country'
      );

      await db.disconnect();
      return res.status(200).json(artists);
    } catch (err: any) {
      if (err) {
        res.status(422).json({ message: err });
      }
    }
  }

  try {
    let foundArtist = await Artist.find({
      $and: generateQueryFilter(filter),
    }).select(
      'name artworks category _id discipline likes recommended pic country'
    );

    await db.disconnect();

    return res.json(foundArtist);
  } catch (err: any) {
    return res.status(422).json({ message: err });
  }
};
