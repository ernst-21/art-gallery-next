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
      return artistArtworks(req, res);
    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

const artistArtworks = async (req: NextApiRequest, res: NextApiResponse) => {
  let artistId = req.body.artistId;
  db.connect();
  try {
    let foundArtworks = await Artwork.find({
      artist_Id: { $in: artistId },
      featured: { $in: false },
    }).select(
      'name artist slug category price _id gallery addedToCart tags colors featured orientation url voters size purchased artist_Id'
    );
    db.disconnect();
    res.status(200).json(foundArtworks);
  } catch (err) {
    return res.status(422).json({ error: err });
  }
};
