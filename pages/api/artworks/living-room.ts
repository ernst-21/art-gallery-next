import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { IArtwork } from '../../../interfaces';
import { Artwork } from '../../../models';
import { getSession } from 'next-auth/react';

type Data = { message: string } | IArtwork[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return getArtworksByCategory(req, res);
    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

const getArtworksByCategory = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { category = 'painting' } = req.body;

  const session: any = await getSession({ req });
  const userId = session?.user._id;

  await db.connect();

  const artworks = await Artwork.find({
    $and: [
      { category: { $in: category } },
      { featured: { $nin: true } },
      { purchased: { $nin: userId } },
    ],
  })
    .select(
      '_id name artist artist_Id description category price tags colors gallery featured orientation url size purchased voters'
    )
    .lean();

  await db.disconnect();

  return res.status(200).json(artworks);
};
