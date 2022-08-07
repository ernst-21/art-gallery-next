import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { IArtist } from '../../../interfaces';
import { Artist } from '../../../models';

type Data = { message: string } | IArtist[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return getArtists(req, res);
    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

const getArtists = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { filter = {} } = req.body;

  const { recommended, likes, discipline } = filter;

  await db.connect();

  try {
    let foundArtist = await Artist.find({
      $and: [
        { recommended: { $in: recommended } },
        { $expr: { $gte: [{ $size: '$likes' }, likes[0]] } },
        { $expr: { $lte: [{ $size: '$likes' }, likes[1]] } },
        { discipline: { $in: discipline } },
      ],
    }).select(
      'name artworks category _id discipline likes recommended pic country'
    );

    await db.disconnect();

    return res.json(foundArtist);
  } catch (err: any) {
    return res.status(422).json({ message: err });
  }
};
