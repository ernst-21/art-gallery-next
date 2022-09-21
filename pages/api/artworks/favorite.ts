import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { IArtwork } from '../../../interfaces';
import { Artwork } from '../../../models';

type Data = { message: string } | IArtwork[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return getUserFavoriteArtworks(req, res);
    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

export const getUserFavoriteArtworks = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await db.connect();
  try {
    const artworks = await Artwork.find({
      $and: [
        { voters: { $in: req.body.userId } },
        { featured: { $in: false } },
      ],
    })
      .select(
        '_id name artist artist_Id description category price tags colors gallery featured orientation url size purchased voters slug'
      )
      .lean();
    await db.disconnect();
    return res.status(200).json(artworks);
  } catch (error) {
    res.status(422).json({ message: error });
  }
};
