import React, { memo } from 'react';
import { ArtworkAndArtistFavorites } from '../../../../types/common.types';
import { ArtistsContainer } from '../../../artists/containers/ArtistsContainer';

const UserFavoriteArtists = ({ artists }: ArtworkAndArtistFavorites) => {
  if (!artists || !artists.length) {
    return null;
  }

  return (
    <ArtistsContainer
      color={'white'}
      artists={artists!}
      translation={'favoriteArtists'}
    />
  );
};

export default memo(UserFavoriteArtists);
