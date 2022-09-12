import { IArtist } from '../interfaces';
import { Artist } from '../models';
import { db } from '.';
import isEmpty from 'lodash/isEmpty';

export const getRecommendedArtists = async (): Promise<IArtist[]> => {
  await db.connect();

  const artists = await Artist.find({
    recommended: true,
  })
    .select('name recommended pic discipline country likes identifier -_id')
    .lean();

  await db.disconnect();

  return artists;
};

const generateQueryFilter = (query: any) => {
  const arrayOfFilters: any = [];

  Object.keys(query).map((key) => {
    if (key === 'likes') {
      arrayOfFilters.push({
        $expr: { $gte: [{ $size: '$likes' }, Number(query[key][0])] },
      });
      arrayOfFilters.push({
        $expr: { $lte: [{ $size: '$likes' }, Number(query[key][1])] },
      });
    }
    if (key !== 'likes') {
      const filterElement = Object.create({});
      filterElement[key] = { $in: query[key] };
      arrayOfFilters.push(filterElement);
    }
  });
  return arrayOfFilters;
};

export const getArtistsByFilter = async (query: any): Promise<IArtist[]> => {
  await db.connect();

  if (isEmpty(query)) {
    const artists = await Artist.find().select(
      'name artworks category _id discipline likes recommended pic country identifier'
    );

    await db.disconnect();
    return JSON.parse(JSON.stringify(artists));
  }

  let foundArtist = await Artist.find({
    $and: generateQueryFilter(query),
  }).select(
    'name artworks category _id discipline likes recommended pic country identifier'
  );

  await db.disconnect();
  return JSON.parse(JSON.stringify(foundArtist));
};

interface ArtistIdentifier {
  identifier: string;
}

export const getArtistIdentifiers = async (): Promise<ArtistIdentifier[]> => {
  await db.connect();
  const identifiers = await Artist.find().select('identifier -_id').lean();

  await db.disconnect();

  return identifiers;
};

export const getArtistByIdentifier = async (
  identifier: string
): Promise<IArtist | null> => {
  await db.connect();
  const artist = await Artist.findOne({ identifier }).lean();
  await db.disconnect();

  if (!artist) {
    return null;
  }

  return JSON.parse(JSON.stringify(artist));
};
