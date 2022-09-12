import { Stack } from '@mui/material';
import React from 'react';
import { ArtistType } from '../../../../types/common.types';
import { ArtistArtworks } from '../../components/ArtistArtworks';
import { ArtistInfoAndPicture } from '../../components/ArtistInfoAndPicture';

const ArtistDetailsContainer = ({ artist }: ArtistType) => {
  return (
    <Stack>
      <ArtistInfoAndPicture artist={artist} />
      <ArtistArtworks artist={artist} />
    </Stack>
  );
};

export default ArtistDetailsContainer;
