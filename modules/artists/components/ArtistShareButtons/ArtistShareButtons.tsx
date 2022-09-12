import React, { memo } from 'react';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Box, IconButton } from '@mui/material';
import { useHasUserVoted } from '../../../../hooks/artworks/useUserInfo';
import { ArtistType } from '../../../../types/common.types';
import { ArtistsSocials } from '../ArtistSocials';

const ArtistShareButtons = ({ artist }: ArtistType) => {
  const { hasVoted } = useHasUserVoted(artist.likes, artist);
  return (
    <Box display={'flex'}>
      <Box>
        <IconButton>
          {hasVoted ? (
            <FavoriteOutlinedIcon sx={{ color: '#ff0000bf' }} />
          ) : (
            <FavoriteBorderOutlinedIcon />
          )}
        </IconButton>
      </Box>
      <ArtistsSocials artist={artist} />
    </Box>
  );
};

export default memo(ArtistShareButtons);
