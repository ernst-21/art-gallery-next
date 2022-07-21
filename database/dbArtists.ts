import { IArtist } from '../interfaces';
import { Artist } from '../models';
import { db } from '.';

export const getRecommendedArtists = async (): Promise<IArtist[]> => {
  await db.connect();

  const artists = await Artist.find({
    recommended: true,
  })
    .select('name recommended pic discipline country likes -_id')
    .lean();

  await db.disconnect();

  return artists;
};
