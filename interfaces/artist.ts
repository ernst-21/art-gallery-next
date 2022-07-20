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
    createdAt?: string;
    updatedAt?: string;
}