import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { IArtwork } from '../../../interfaces';
import { Artwork } from '../../../models';

type Data = { message: string } | IArtwork[];

export default async function getArtworksByFilter(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return similarArtworks(req, res);
    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

const similarArtworks = async (req: NextApiRequest, res: NextApiResponse) => {
  let similar = req.body.tags;
  let artworkId = req.body.artworkId;
  db.connect();
  try {
    let foundArtworks = await Artwork.find({
      tags: { $in: similar },
      _id: { $nin: artworkId },
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
