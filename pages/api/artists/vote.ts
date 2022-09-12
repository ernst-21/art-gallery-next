import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Artist } from '../../../models';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      return voteArtist(req, res);
    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

const voteArtist = async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();

  try {
    let updatedArtist = await Artist.findOneAndUpdate(
      { identifier: req.body.identifier },
      {
        $push: { likes: req.body.userId },
      },
      { new: true }
    ).select(
      'name artworks category _id discipline likes recommended pic country identifier'
    );

    await db.disconnect();

    return res.status(200).json(updatedArtist);
  } catch (err: any) {
    return res.status(422).json({ message: err });
  }
};
