import { IArtwork } from '../interfaces';
import { Artwork } from '../models';
import { db } from '.';

export const getFeaturedArtworks = async (): Promise<IArtwork[]> => {
  await db.connect();

  const artworks = await Artwork.find({
    featured: true,
  })
    .select('name category url gallery featured -_id')
    .lean();

  await db.disconnect();

  return artworks;
};
