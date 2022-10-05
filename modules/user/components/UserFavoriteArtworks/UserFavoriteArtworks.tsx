import React, { useEffect, memo } from 'react';
import { ErrorContainer } from '../../../../components/ui/ErrorContainer';
import { SpinLoaderContainer } from '../../../../components/ui/SpinLoaderContainer';
import { useFavoriteArtworks } from '../../../../context/artworks/FavoriteArtworksContext/FavoriteArtworksContext';
import {
  ArtworkAndArtistFavorites,
  LoadingAndIsErrorType,
} from '../../../../types/common.types';
import ArtworksContainer from '../../../artworks/containers/ArtworksContainer';

const UserFavoriteArtworks = ({
  artworks,
  isLoading,
  isError,
}: ArtworkAndArtistFavorites & LoadingAndIsErrorType) => {
  const { favoritesCount, setFavoritesCount } = useFavoriteArtworks();

  useEffect(() => {
    if (artworks) {
      //@ts-ignore
      setFavoritesCount(artworks.length);
    }
  }, [artworks, setFavoritesCount]);

  if (isLoading) {
    return <SpinLoaderContainer />;
  }

  if (isError) {
    return <ErrorContainer />;
  }

  if (!artworks || favoritesCount === 0) {
    return null;
  }

  return (
    <ArtworksContainer artworks={artworks!} title={'My favorite artworks'} />
  );
};

export default memo(UserFavoriteArtworks);
