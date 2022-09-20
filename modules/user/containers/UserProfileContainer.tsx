import React, { memo } from 'react';
import { Stack } from '@mui/material';
import {
  ArtworkAndArtistFavorites,
  UserProps,
} from '../../../types/common.types';
import { EmptyFavorites } from '../components/EmptyFavorites';
import { UserFavoriteArtists } from '../components/UserFavoriteArtists';
import { UserFavoriteArtworks } from '../components/UserFavoriteArtworks';
import { UserDetails } from '../components/UserDetails';

const UserProfileContainer = ({
  artworks,
  artists,
  user,
}: ArtworkAndArtistFavorites & UserProps) => {
  return (
    <Stack>
      <UserDetails user={user} />
      {!artists?.length || !artworks?.length ? (
        <EmptyFavorites />
      ) : (
        <>
          <UserFavoriteArtworks artworks={artworks} />
          <UserFavoriteArtists artists={artists} />
        </>
      )}
    </Stack>
  );
};

export default memo(UserProfileContainer);
