import { IArtwork } from '../interfaces';
import { Artwork } from '../models';
import { db } from '.';
import isEmpty from 'lodash/isEmpty';

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

const generateQueryFilter = (query: any, userId: string) => {
  const arrayOfFilters: any = [
    { featured: { $in: false } },
    { purchased: { $nin: userId } },
  ];
  Object.keys(query).map((key) => {
    if (key === 'price') {
      arrayOfFilters.push({
        price: {
          $gt: Number(query['price'][0]),
          $lt: Number(query['price'][1]),
        },
      });
    }
    if (key === 'voters') {
      arrayOfFilters.push({
        $expr: { $gte: [{ $size: '$voters' }, Number(query[key][0])] },
      });
      arrayOfFilters.push({
        $expr: { $lte: [{ $size: '$voters' }, Number(query[key][1])] },
      });
    }
    if (key !== 'voters' && key !== 'price') {
      const filterElement = Object.create({});
      filterElement[key] = { $in: query[key] };
      arrayOfFilters.push(filterElement);
    }
  });
  return arrayOfFilters;
};

export const getArtworksByQuery = async (query: any, userId: string) => {
  await db.connect();

  if (isEmpty(query)) {
    try {
      const artworks = await Artwork.find({
        $and: [{ purchased: { $nin: userId } }, { featured: { $in: false } }],
      }).select(
        '_id name artist artist_Id description category price tags colors gallery featured orientation url size purchased voters'
      );

      await db.disconnect();
      return JSON.parse(JSON.stringify(artworks));
    } catch (err: any) {
      if (err) {
        JSON.parse(JSON.stringify({ message: err }));
      }
    }
  }

  try {
    const artworks = await Artwork.find({
      $and: generateQueryFilter(query, userId),
    }).select(
      '_id name artist artist_Id description category price tags colors gallery featured orientation url size purchased voters'
    );

    await db.disconnect();

    return JSON.parse(JSON.stringify(artworks));
  } catch (err: any) {
    if (err) {
      JSON.parse(JSON.stringify({ message: err }));
    }
  }
};
