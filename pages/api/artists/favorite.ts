import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Artist } from '../../../models';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      return getUserFavoriteArtists(req, res);
    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

const getUserFavoriteArtists = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await db.connect();
  try {
    const artists = await Artist.find({
      likes: { $in: req.body.userId },
    })
      .select('name recommended pic discipline country likes identifier _id')
      .lean();

    await db.disconnect();

    return res.status(200).json(artists);
  } catch (err: any) {
    return res.status(422).json({ message: err });
  }
};
