export interface IArtist {
  _id?: string;
  name: string;
  likes: string[];
  discipline: string;
  about: string;
  pic: string;
  country: string;
  recommended: boolean;
  artworks: string[];
  identifier: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IArtistFilter {
  discipline?: string[];
  recommended?: boolean[];
  likes?: number[];
}
