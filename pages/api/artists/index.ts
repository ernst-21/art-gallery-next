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
    case 'GET':
      return getArtists(req, res);
    case 'POST':
      return res.status(200).json({ message: 'Served from SSR' });
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

    return res.status(200).json(foundArtist);
  } catch (err: any) {
    return res.status(422).json({ message: err });
  }
};
