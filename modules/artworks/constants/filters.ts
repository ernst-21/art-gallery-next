import { IArtworksFilter } from '../../../interfaces';
import { ArtworkOrientation } from '../../../types/orientation';

export const filterDefaults: IArtworksFilter = {
  category: ['painting', 'print', 'sculpture', 'photography'],
  orientation: ['landscape', 'portrait', 'square'],
  size: ['big', 'small', 'medium'],
  gallery: ['Paris', 'London', 'Berlin', 'New York'],
  price: [0, 10000],
  voters: [0, 100],
  artist: [
    'William Shakespeare',
    'Alice Walker',
    'Jane Eyre',
    'Victor Hugo',
    'Walt Whitman',
    'John Doe',
    'Alexandre Dumas',
  ],
  tags: [
    'flowers',
    'sea',
    'beach',
    'nature',
    'man',
    'men',
    'woman',
    'women',
    'abstract',
    'boat',
    'river',
    'lake',
    'statue',
    'head',
    'children',
    'dog',
    'naked',
    'dish',
    'bottle',
    'pottery',
    'relaxing',
    'jump',
    'skating',
    'colorful',
    'road',
    'camera',
    'people',
    'animals',
    'village',
    'mythology',
  ],
  colors: [
    'maroon',
    'orange',
    'yellow',
    'limegreen',
    'olive',
    'green',
    'darkcyan',
    'blue',
    'darkblue',
    'darkviolet',
    'pink',
    'magenta',
    'white',
    'gray',
    'black',
  ],
};

export const PRICE_DEFAULT_VALUES = [0, 10000];

export const PRICE_FILTER_NAME = 'price';

export const LIKES_DEFAULT_VALUES = [0, 100];

export const LIKES_FILTER_NAME = 'voters';

export const ORIENTATION_SX: ArtworkOrientation = {
  landscape: {
    width: '25px',
    height: '15px',
    backgroundColor: 'gray',
    mr: 2,
    cursor: 'pointer',
  },
  portrait: {
    width: '15px',
    height: '22px',
    backgroundColor: 'gray',
    mr: 2,
    cursor: 'pointer',
  },
  square: {
    width: '18.5px',
    height: '18.5px',
    backgroundColor: 'gray',
    cursor: 'pointer',
  },
};
