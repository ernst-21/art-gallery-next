export interface IArtwork {
  _id?: string;
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
  createdAt?: string;
  updatedAt?: string;
}
