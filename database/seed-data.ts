import bcrypt from 'bcryptjs';

interface SeedUser {
  name: string;
  email: string;
  password: string;
  favoriteArtworks: string[];
  favoriteArtists: string[];
  purchased: string[];
  role: 'admin' | 'client';
}

interface SeedArtist {
  name: string;
  likes: string[];
  discipline: string;
  about: string;
  pic: string;
  country: string;
  recommended: boolean;
  identifier: string;
  //artworks: string[];
}

export interface SeedArtwork {
  name: string;
  artist: string;
  artist_Id: string;
  description: string;
  category: string;
  price: number;
  tags: string[];
  colors: string[];
  gallery: string;
  featured: boolean;
  orientation: 'portrait' | 'square' | 'landscape';
  url: string;
  size: 'small' | 'medium' | 'big';
  purchased: string[];
  voters: string[];
  slug: string;
}

interface SeedTestimonial {
  author: string;
  image?: string;
  authPosition?: string;
  testimonial: string;
}

interface SeedNew {
  image: string;
  title: string;
  text: string;
}

interface SeedData {
  users: SeedUser[];
  artists: SeedArtist[];
  artworks: SeedArtwork[];
  testimonials: SeedTestimonial[];
  news: SeedNew[];
}

export const initialData: SeedData = {
  users: [
    {
      name: 'Ernst',
      email: 'ernst@google.com',
      password: bcrypt.hashSync('123456'),
      favoriteArtworks: [],
      favoriteArtists: [],
      purchased: [],
      role: 'admin',
    },
  ],
  artists: [
    {
      name: 'William Shakespeare',
      likes: [],
      discipline: 'photographer',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus harum non, perspiciatis recusandae veniam? Accusantium cumque dignissimos esse exercitationem explicabo, facilis ipsam libero pariatur, possimus, reprehenderit sint vero voluptate.',
      pic: 'https://images.unsplash.com/photo-1442328166075-47fe7153c128?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      country: 'England',
      recommended: true,
      identifier: 'william-shakespeare-4022a',
    },
    {
      name: 'Walt Whitman',
      likes: [],
      discipline: 'printmaker',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus harum non, perspiciatis recusandae veniam? Accusantium cumque dignissimos esse exercitationem explicabo, facilis ipsam libero pariatur, possimus, reprehenderit sint vero voluptate.',
      pic: 'https://images.unsplash.com/photo-1495568995596-9e40959aa178?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=806&q=80',
      country: 'USA',
      recommended: false,
      identifier: 'walt-whitman-4022b',
    },
    {
      name: 'John Doe',
      likes: [],
      discipline: 'sculptor',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus harum non, perspiciatis recusandae veniam? Accusantium cumque dignissimos esse exercitationem explicabo, facilis ipsam libero pariatur, possimus, reprehenderit sint vero voluptate.',
      pic: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      country: 'USA',
      recommended: false,
      identifier: 'john-doe-4022c',
    },
    {
      name: 'Alice Walker',
      likes: [],
      discipline: 'painter',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus harum non, perspiciatis recusandae veniam? Accusantium cumque dignissimos esse exercitationem explicabo, facilis ipsam libero pariatur, possimus, reprehenderit sint vero voluptate.',
      pic: 'https://images.unsplash.com/photo-1512361436605-a484bdb34b5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      country: 'USA',
      recommended: true,
      identifier: 'alice-walker-4022d',
    },
    {
      name: 'Jane Eyre',
      likes: [],
      discipline: 'photographer',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus harum non, perspiciatis recusandae veniam? Accusantium cumque dignissimos esse exercitationem explicabo, facilis ipsam libero pariatur, possimus, reprehenderit sint vero voluptate.',
      pic: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      country: 'England',
      recommended: true,
      identifier: 'jane-eyre-4022e',
    },
    {
      name: 'Victor Hugo',
      likes: [],
      discipline: 'painter',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus harum non, perspiciatis recusandae veniam? Accusantium cumque dignissimos esse exercitationem explicabo, facilis ipsam libero pariatur, possimus, reprehenderit sint vero voluptate.',
      pic: 'https://images.unsplash.com/photo-1501797362492-608847952c4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      country: 'France',
      recommended: true,
      identifier: 'victor-hugo-4022f',
    },
    {
      name: 'Alexandre Dumas',
      likes: [],
      discipline: 'photographer',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus harum non, perspiciatis recusandae veniam? Accusantium cumque dignissimos esse exercitationem explicabo, facilis ipsam libero pariatur, possimus, reprehenderit sint vero voluptate.',
      pic: 'https://images.unsplash.com/photo-1605038593290-475661bfbba3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      country: 'Germany',
      recommended: false,
      identifier: 'alexandre-dumas-40230',
    },
  ],
  artworks: [
    {
      name: 'The flowers in garden',
      artist: 'Victor Hugo',
      artist_Id: 'victor-hugo-4022f',
      description:
        'This artwork represent flowers in garden as well as the feelings of the artists.',
      category: 'painting',
      price: 4500,
      tags: ['flowers', 'nature', 'garden', 'colors', 'colorful'],
      colors: ['blue', 'magenta'],
      gallery: 'Paris',
      featured: false,
      orientation: 'portrait',
      url: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
      size: 'medium',
      purchased: [],
      voters: [],
      slug: 'the-flowers-in-garden-f4180',
    },
    {
      name: 'The beach in the morning',
      artist: 'Jane Eyre',
      artist_Id: 'jane-eyre-4022e',
      description: 'The Sea was very important in childhood of the artists.',
      category: 'photography',
      price: 900,
      tags: [
        'sea',
        'beach',
        'sky',
        'blue',
        'sand',
        'photo',
        'photography',
        'bird',
        'birds',
      ],
      colors: ['blue', 'white'],
      gallery: 'Berlin',
      featured: true,
      orientation: 'landscape',
      url: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
      size: 'small',
      purchased: [],
      voters: [],
      slug: 'the-beach-in-the-morning-f417f',
    },
    {
      name: 'End of the road',
      artist: 'William Shakespeare',
      artist_Id: 'william-shakespeare-4022a',
      description: 'Photo taken in a difficult moment of the artist life.',
      category: 'photography',
      price: 700,
      tags: [
        'trees',
        'road',
        'loneliness',
        'end',
        'photography',
        'photo',
        'people',
      ],
      colors: ['maroon', 'amber'],
      gallery: 'Paris',
      featured: false,
      orientation: 'portrait',
      url: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      size: 'big',
      purchased: [],
      voters: [],
      slug: 'end-of-the-road-f417d',
    },
    {
      name: 'Springtime',
      artist: 'Walt Whitman',
      artist_Id: 'walt-whitman-4022b',
      description:
        'In 1904 the artist fell that dogs should be present in his artworks so he could remember his own pet.',
      category: 'painting',
      price: 1200,
      tags: [
        'flowers',
        'nature',
        'garden',
        'dog',
        'colorful',
        'landscape',
        'people',
      ],
      colors: ['blue', 'yellow', 'white', 'green'],
      gallery: 'London',
      featured: true,
      orientation: 'landscape',
      url: 'https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80',
      size: 'small',
      purchased: [],
      voters: [],
      slug: 'springtime-f4181',
    },
    {
      name: 'Colors in the wall',
      artist: 'Alice Walker',
      artist_Id: 'alice-walker-4022d',
      description:
        'The painting describes all the emotions of the artist in her last days.',
      category: 'painting',
      price: 300,
      tags: ['abstract', 'colorful', 'wall'],
      colors: ['blue', 'pink', 'gray', 'yellow'],
      gallery: 'London',
      featured: true,
      orientation: 'landscape',
      url: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
      size: 'big',
      purchased: [],
      voters: [],
      slug: 'colors-in-the-wall-f417e',
    },
    {
      name: 'Women heads',
      artist: 'Alice Walker',
      artist_Id: 'alice-walker-4022d',
      description:
        'The painting describes all the emotions of the artist in her last days.',
      category: 'painting',
      price: 1587,
      tags: ['abstract', 'painting', 'women', 'heads'],
      colors: ['gray', 'black'],
      gallery: 'New York',
      featured: true,
      orientation: 'landscape',
      url: 'https://images.unsplash.com/photo-1589030343991-69ea1433b941?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      size: 'big',
      purchased: [],
      voters: [],
      slug: 'women-heads-f417e',
    },
    {
      name: 'Fleeing from heaven',
      artist: 'John Doe',
      artist_Id: 'john-doe-4022c',
      description: 'Describing human condition in a hurry.',
      category: 'sculpture',
      price: 3000,
      tags: ['body', 'naked', 'sculpture', 'mythology', 'people', 'statue'],
      colors: ['white'],
      voters: ['6310f9cf598514923cc9a976'],
      gallery: 'Berlin',
      featured: false,
      orientation: 'portrait',
      url: 'https://images.unsplash.com/photo-1561839561-b13bcfe95249?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80',
      size: 'big',
      purchased: [],
      slug: 'fleeing-from-heaven-f4182',
    },
    {
      name: 'Once upon a time in Asia',
      artist: 'Alexandre Dumas',
      artist_Id: 'alexandre-dumas-40230',
      description:
        'Taken during the adventure of the author in the Asian continent.',
      category: 'photography',
      price: 900,
      tags: [
        'children',
        'kid',
        'child',
        'boy',
        'asia',
        'photo',
        'photography',
        'picture',
        'people',
      ],
      colors: ['black', 'gray', 'white'],
      gallery: 'New York',
      featured: false,
      orientation: 'portrait',
      url: 'https://images.unsplash.com/photo-1591706532642-71d270026ffd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      size: 'medium',
      purchased: [],
      voters: [],
      slug: 'once-upon-a-time-in-asia-f4183',
    },
    {
      name: 'Preparing the message',
      artist: 'Alexandre Dumas',
      artist_Id: 'alexandre-dumas-40230',
      description: 'Men preparing the message to be sent to the front.',
      category: 'photography',
      price: 400,
      tags: [
        'photography',
        'photo',
        'men',
        'man',
        'war',
        'message',
        'pigeon',
        'people',
      ],
      colors: ['gray', 'white'],
      gallery: 'New York',
      featured: false,
      orientation: 'landscape',
      url: 'https://images.unsplash.com/photo-1575995871409-41a1996609f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=819&q=80',
      size: 'small',
      purchased: [],
      voters: [],
      slug: 'preparing-the-message-f4183',
    },
    {
      name: 'New Venus',
      artist: 'John Doe',
      artist_Id: 'john-doe-4022c',
      description: 'Representation of female beauty according to the author.',
      category: 'sculpture',
      price: 8000,
      tags: [
        'naked',
        'wooman',
        'beauty',
        'sculpture',
        'venus',
        'mythology',
        'people',
        'statue',
      ],
      colors: ['white'],
      gallery: 'London',
      featured: false,
      orientation: 'portrait',
      url: 'https://images.unsplash.com/photo-1593180318097-80afc542cfff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80',
      size: 'medium',
      purchased: [],
      voters: [],
      slug: 'new-venus-f4182',
    },
    {
      name: 'Direct to the river',
      artist: 'Walt Whitman',
      artist_Id: 'walt-whitman-4022b',
      description:
        'Print of the original work that represents all hours the author spent on the river bank.',
      category: 'print',
      price: 97,
      tags: ['river', 'nature', 'print', 'rocks', 'riverbank'],
      colors: ['brown', 'gray', 'white'],
      gallery: 'Berlin',
      featured: false,
      orientation: 'portrait',
      url: 'https://images.unsplash.com/photo-1578301978069-45264734cddc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=355&q=80',
      size: 'medium',
      purchased: [],
      voters: [],
      slug: 'direct-to-the-river-f4181',
    },
    {
      name: 'Table stuffs',
      artist: 'Walt Whitman',
      artist_Id: 'walt-whitman-4022b',
      description: 'Just stuffs on the table.',
      category: 'print',
      price: 665,
      tags: ['dishes', 'dish', 'table', 'print'],
      colors: ['brown', 'white'],
      gallery: 'New York',
      featured: false,
      orientation: 'landscape',
      url: 'https://images.unsplash.com/photo-1610701596295-4dc5d6289214?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
      size: 'small',
      purchased: [],
      voters: [],
      slug: 'table-stuffs-f4181',
    },
    {
      name: 'People on the boat',
      artist: 'Alexandre Dumas',
      artist_Id: 'alexandre-dumas-40230',
      description: 'Photo of the time when the author used to go fishing.',
      category: 'photography',
      price: 600,
      tags: [
        'boat',
        'lake',
        'river',
        'nature',
        'photo',
        'people',
        'phishing',
        'photography',
      ],
      colors: ['black', 'gray', 'white'],
      gallery: 'London',
      featured: false,
      orientation: 'portrait',
      url: 'https://images.unsplash.com/photo-1610632390238-d72af2f4b3aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      size: 'medium',
      purchased: [],
      voters: [],
      slug: 'people-on-the-boat-f4183',
    },
    {
      name: 'Camera to the horizon',
      artist: 'Jane Eyre',
      artist_Id: 'jane-eyre-4022e',
      description: 'The artist tried to see beyond the horizon.',
      category: 'photography',
      price: 200,
      tags: ['beach', 'horizon', 'camera', 'sea', 'photo', 'photography'],
      colors: ['black', 'gray', 'white'],
      gallery: 'Paris',
      featured: false,
      orientation: 'landscape',
      url: 'https://images.unsplash.com/photo-1554136545-2f288e8cf4bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
      size: 'small',
      purchased: [],
      voters: [],
      slug: 'camera-to-the-horizon-f417f',
    },
    {
      name: 'Carrying the precious liquid',
      artist: 'Victor Hugo',
      artist_Id: 'victor-hugo-4022f',
      description:
        'Painting showing how careful we must be while carrying water to home.',
      category: 'painting',
      price: 8000,
      tags: ['woman', 'india', 'asia', 'carrying', 'colorful', 'painting'],
      colors: ['blue', 'purple', 'brown', 'red'],
      voters: [],
      gallery: 'London',
      featured: false,
      orientation: 'portrait',
      url: 'https://images.unsplash.com/photo-1577720643272-265f09367456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=345&q=80',
      size: 'big',
      purchased: [],
      slug: 'carrying-the-precious-liquid-f4180',
    },
    {
      name: 'Skating to the sky',
      artist: 'William Shakespeare',
      artist_Id: 'william-shakespeare-4022a',
      description:
        'The painting describes all the emotions of the artist in her last days.',
      category: 'photography',
      price: 200,
      tags: ['skating', 'skate', 'photography', 'photo', 'jumping', 'jump'],
      colors: ['black', 'gray', 'white'],
      gallery: 'Berlin',
      featured: false,
      orientation: 'portrait',
      url: 'https://images.unsplash.com/photo-1597769906771-dd0471091782?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
      size: 'medium',
      purchased: [],
      voters: [],
      slug: 'skating-to-the-sky-f417d',
    },
    {
      name: 'Near the wall',
      artist: 'Alice Walker',
      artist_Id: 'alice-walker-4022d',
      description: 'Instruments used by the artist during her trip to Egypt.',
      category: 'painting',
      price: 150,
      tags: ['pottery', 'recipients', 'bottle', 'dishes', 'dish'],
      colors: ['maroon', 'brown', 'black'],
      gallery: 'New York',
      featured: false,
      orientation: 'square',
      url: 'https://images.unsplash.com/photo-1577720643380-d74d33d4a068?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=430&q=80',
      size: 'medium',
      purchased: [],
      voters: [],
      slug: 'near-the-wall-f417e',
    },
    {
      name: 'My village',
      artist: 'Victor Hugo',
      artist_Id: 'victor-hugo-4022f',
      description:
        'Representation of the village of the author after the pandemic.',
      category: 'painting',
      price: 4000,
      tags: [
        'abstract',
        'village',
        'river',
        'cow',
        'town',
        'mountain',
        'colors',
        'colorful',
      ],
      colors: ['blue', 'red', 'green', 'yellow'],
      gallery: 'London',
      featured: false,
      orientation: 'landscape',
      url: 'https://images.unsplash.com/photo-1580136579585-48a5311ee2f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=693&q=80',
      size: 'small',
      purchased: [],
      voters: [],
      slug: 'my-village-f4180',
    },
    {
      name: 'Artemis',
      artist: 'John Doe',
      artist_Id: 'john-doe-4022c',
      description: 'Photo taken during museum visits.',
      category: 'sculpture',
      price: 6000,
      tags: [
        'archery',
        'woman',
        'goddess',
        'statue',
        'mythology',
        'sculpture',
        'statue',
      ],
      colors: ['gray'],
      gallery: 'Paris',
      featured: false,
      orientation: 'portrait',
      url: 'https://images.unsplash.com/photo-1609856874044-feb5f49c83dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      size: 'medium',
      purchased: [],
      voters: [],
      slug: 'artemis-f4182',
    },
    {
      name: 'Just relaxing',
      artist: 'William Shakespeare',
      artist_Id: 'william-shakespeare-4022a',
      description:
        'Painting of the daughter of the artist during her visit from France.',
      category: 'photography',
      price: 700,
      tags: [
        'flowers',
        'nature',
        'garden',
        'colors',
        'sunflower',
        'woman',
        'girl',
        'relaxing',
        'woman',
      ],
      colors: ['blue', 'yellow', 'white', 'green'],
      gallery: 'Berlin',
      featured: false,
      orientation: 'portrait',
      url: 'https://images.unsplash.com/photo-1484800089236-7ae8f5dffc8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      size: 'medium',
      purchased: [],
      voters: [],
      slug: 'just-relaxing-f417d',
    },
  ],
  testimonials: [
    {
      author: 'Jane Snow',
      image:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      authPosition: 'Editor at Art.inc',
      testimonial:
        'I think this is an awesome website for art lovers and artists that want to reach more people with their work.',
    },
    {
      author: 'Phillip Galvin',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      authPosition: 'Curator',
      testimonial:
        'Very good website with options for people who want to decorate their homes.',
    },
    {
      author: 'Walter Renoir',
      image:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      authPosition: 'Student at Harvard',
      testimonial:
        'Every time someone asks me about a website where they can find artworks I recommend VRTL',
    },
    {
      author: 'Nolan Parker',
      image:
        'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      authPosition: 'Writer',
      testimonial:
        'I just made my first visit to VRTL and I am ready to write a couple of articles about the amazing job they are doing.',
    },
    {
      author: 'Katherine Bilbo',
      image:
        'https://images.unsplash.com/photo-1523825036634-aab3cce05919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBvcnRyYWl0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      authPosition: 'Just a user',
      testimonial: 'Keep going! You are doing a wonderful job.',
    },
    {
      author: 'Clarence Schneider',
      image:
        'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      authPosition: 'Painter',
      testimonial:
        'I remember when I started painting an VRTL helped me by exposing and promoting some of my artworks. I had my first exposition in a famous gallery because of them.',
    },
  ],
  news: [
    {
      title: 'AI-made art is on its way',
      image:
        'https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum cupiditate, provident cum illum fugit labore ex magni a ea corrupti tenetur obcaecati voluptate quae pariatur dicta nam ut assumenda.',
    },
    {
      title: 'More artists willing to participate in street-art event',
      image:
        'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum cupiditate, provident cum illum fugit labore ex magni a ea corrupti tenetur obcaecati voluptate quae pariatur dicta nam ut assumenda.',
    },
    {
      title: 'Communities are ready for for next street-art event',
      image:
        'https://images.unsplash.com/photo-1505760753167-0149337113f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum cupiditate, provident cum illum fugit labore ex magni a ea corrupti tenetur obcaecati voluptate quae pariatur dicta nam ut assumenda.',
    },
  ],
};
