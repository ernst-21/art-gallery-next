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
      return getSuggestedArtworks(req, res);
    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

const extractingTags = (obj: IArtwork, arrToStore: string[]) => {
  for (let i = 0; i < obj.tags.length; i++) {
    if (!arrToStore.includes(obj.tags[i])) {
      arrToStore.push(obj.tags[i]);
    }
  }
  return arrToStore;
};

export const getSuggestedArtworks = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  let artworksTags: string[] = [];
  const artworksInCart = req.body.cart;
  const cartIds = artworksInCart.map((item: IArtwork) => item._id);
  const cartTags = artworksInCart.map((item: IArtwork) =>
    extractingTags(item, artworksTags)
  );

  await db.connect();
  try {
    const artworks = await Artwork.find({
      $and: [
        { _id: { $nin: cartIds } },
        { featured: { $in: false } },
        { tags: { $in: cartTags[0] } },
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
