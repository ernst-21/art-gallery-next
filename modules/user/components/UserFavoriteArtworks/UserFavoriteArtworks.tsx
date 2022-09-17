import React, { useEffect } from 'react';
import { useFavoriteArtworks } from '../../../../context/artworks/FavoriteArtworksContext/FavoriteArtworksContext';
import { ArtworkAndArtistFavorites } from '../../../../types/common.types';
import ArtworksContainer from '../../../artworks/containers/ArtworksContainer';

const UserFavoriteArtworks = ({ artworks }: ArtworkAndArtistFavorites) => {
  const { favoritesCount, setFavoritesCount } = useFavoriteArtworks();

  useEffect(() => {
    if (artworks) {
      //@ts-ignore
      setFavoritesCount(artworks.length);
    }
  }, [artworks, setFavoritesCount]);

  if (!artworks || favoritesCount === 0) {
    return null;
  }
  return (
    <ArtworksContainer artworks={artworks!} title={'My Favorite Artworks'} />
  );
};

export default UserFavoriteArtworks;
