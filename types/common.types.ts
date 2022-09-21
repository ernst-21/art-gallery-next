import { ReactNode } from 'react';
import { IArtwork, IArtist } from '../interfaces';

export type ChildrenProps = {
  children?: ReactNode | undefined;
};

export type ArtworkType = {
  artwork: IArtwork;
};

export type ArtworkAndArtistFavorites = {
  artworks?: IArtwork[];
  artists?: IArtist[];
};

export type ArtistType = {
  artist: IArtist;
};

export type ArtistVoteType = {
  identifier: string;
  userId?: string;
};

export type ArtworkVoteType = {
  artworkId: string;
  userId?: string;
};

export type UserProps = {
  user: {
    email: string;
    name: string;
    role: string;
    _id: string;
  };
  // password?: string;
  // passwordRepeat?: string
};

export type LoadingAndIsErrorType = {
  isLoading: boolean;
  isError: boolean;
};
