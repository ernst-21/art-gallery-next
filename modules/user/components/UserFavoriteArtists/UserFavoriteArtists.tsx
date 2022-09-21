import React, { memo } from 'react';
import {
  ArtworkAndArtistFavorites,
  LoadingAndIsErrorType,
} from '../../../../types/common.types';
import { ArtistsContainer } from '../../../artists/containers/ArtistsContainer';
import { SpinLoaderContainer } from '../../../../components/ui/SpinLoaderContainer';
import { ErrorContainer } from '../../../../components/ui/ErrorContainer';

const UserFavoriteArtists = ({
  artists,
  isLoading,
  isError,
}: ArtworkAndArtistFavorites & LoadingAndIsErrorType) => {
  if (isLoading) {
    return <SpinLoaderContainer />;
  }

  if (isError) {
    return <ErrorContainer />;
  }

  if (!artists || !artists.length) {
    return null;
  }

  return (
    <ArtistsContainer
      color={'white'}
      artists={artists}
      translation={'favoriteArtists'}
    />
  );
};

export default memo(UserFavoriteArtists);
