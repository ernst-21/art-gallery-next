import React, { memo, useEffect } from 'react';
import { Stack } from '@mui/material';
import {
  ArtworkAndArtistFavorites,
  UserProps,
} from '../../../types/common.types';
import { EmptyFavorites } from '../components/EmptyFavorites';
import { UserFavoriteArtists } from '../components/UserFavoriteArtists';
import { UserFavoriteArtworks } from '../components/UserFavoriteArtworks';
import { UserDetails } from '../components/UserDetails';
import { useQuery, useQueryClient } from 'react-query';
import { getFavoriteArtworks } from '../../artworks/services/artworks-api';
import { getFavoriteArtists } from '../../artists/services/artists-api';

const UserProfileContainer = ({
  user,
}: ArtworkAndArtistFavorites & UserProps) => {
  const queryClient = useQueryClient();

  const {
    data: artworks,
    isLoading,
    isError,
  } = useQuery(
    ['favorites', user?._id],
    () => getFavoriteArtworks({ userId: user?._id }),
    {
      enabled: !!user?._id,
    }
  );
  const {
    data: artists,
    isLoading: isLoadingArtists,
    isError: hasArtistError,
  } = useQuery(
    ['favoriteArtists', user?._id],
    () => getFavoriteArtists({ userId: user?._id }),
    {
      enabled: !!user?._id,
    }
  );

  useEffect(() => {
    queryClient.invalidateQueries(['favorites', user?._id]);
    queryClient.invalidateQueries(['favoriteArtists', user?._id]);
  }, [queryClient, user?._id]);

  return (
    <Stack>
      <UserDetails user={user} />
      {!artists?.length && !artworks?.length ? (
        <EmptyFavorites />
      ) : (
        <>
          <UserFavoriteArtworks
            isError={isError}
            isLoading={isLoading}
            artworks={artworks}
          />
          <UserFavoriteArtists
            isError={hasArtistError}
            isLoading={isLoadingArtists}
            artists={artists}
          />
        </>
      )}
    </Stack>
  );
};

export default memo(UserProfileContainer);
