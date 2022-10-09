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
      return downVoteArtwork(req, res);
    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

const downVoteArtwork = async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();

  try {
    const updatedArtworks = await Artwork.findOneAndUpdate(
      { _id: req.body.artworkId },
      {
        $pull: { voters: req.body.userId },
      },
      { new: true }
    ).select(
      'name artist slug description category price _id gallery addedToCart tags colors featured orientation url voters size purchased artist_Id'
    );
    await db.disconnect();
    return res.status(200).json(updatedArtworks);
  } catch (err) {
    return res.status(422).json({ message: err });
  }
};
