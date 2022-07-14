
export interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  favoriteArtworks : string[],
  favoriteArtists : string[],
  createdAt?: string;
  updatedAt?: string;
}