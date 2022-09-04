import { ReactNode } from 'react';
import { IArtwork } from '../interfaces';

export type ChildrenProps = {
  children?: ReactNode | undefined;
};

export type ArtworkType = {
  artwork: IArtwork;
};
