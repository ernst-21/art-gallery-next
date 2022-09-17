import { Stack } from '@mui/material';
import React from 'react';
import { ArtworkAndArtistFavorites } from '../../../types/common.types';
import { UserFavoriteArtists } from '../components/UserFavoriteArtists';
import { UserFavoriteArtworks } from '../components/UserFavoriteArtworks';

const UserProfileContainer = ({
  artworks,
  artists,
}: ArtworkAndArtistFavorites) => {
  return (
    <Stack>
      <UserFavoriteArtworks artworks={artworks} />
      <UserFavoriteArtists artists={artists} />
    </Stack>
  );
};

export default UserProfileContainer;
