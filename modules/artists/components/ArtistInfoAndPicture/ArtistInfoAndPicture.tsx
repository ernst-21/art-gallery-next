import { Box, Stack } from '@mui/material';
import React from 'react';
import PageWidthContainer from '../../../../components/layouts/PageWidthContainer';
import { ArtistType } from '../../../../types/common.types';
import ArtistInfo from '../ArtistInfo/ArtistInfo';
import { ArtistPicture } from '../ArtistPicture';

const ArtistInfoAndPicture = ({ artist }: ArtistType) => {
  return (
    <PageWidthContainer>
      <Stack
        spacing={{ xs: 2, md: 4 }}
        direction={{ xs: 'column', md: 'row' }}
        display={'flex'}
        sx={{ paddingY: 6, paddingX: { xs: 4 } }}
      >
        <ArtistInfo artist={artist} />
        <ArtistPicture artist={artist} />
      </Stack>
    </PageWidthContainer>
  );
};

export default ArtistInfoAndPicture;
