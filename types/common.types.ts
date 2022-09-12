import { ReactNode } from 'react';
import { IArtwork, IArtist } from '../interfaces';

export type ChildrenProps = {
  children?: ReactNode | undefined;
};

export type ArtworkType = {
  artwork: IArtwork;
};

export type ArtistType = {
  artist: IArtist;
};
