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

const getArtworks = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { filter = {} } = req.body;

  const session: any = await getSession({ req });
  const userId = session?.user._id;

  const {
    category,
    orientation,
    size,
    gallery,
    artist,
    tags,
    price,
    colors,
    voters,
  } = filter;

  await db.connect();

  try {
    const artworks = await Artwork.find({
      $and: [
        { category: { $in: category } },
        { orientation: { $in: orientation } },
        { size: { $in: size } },
        { gallery: { $in: gallery } },
        { artist: { $in: artist } },
        { tags: { $in: tags } },
        { purchased: { $nin: userId } },
        { colors: { $in: colors } },
        {
          price: {
            $gt: price[0],
            $lt: price[1],
          },
        },
        { $expr: { $gte: [{ $size: '$voters' }, voters[0]] } },
        { $expr: { $lte: [{ $size: '$voters' }, voters[1]] } },
        { featured: { $in: false } },
      ],
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
