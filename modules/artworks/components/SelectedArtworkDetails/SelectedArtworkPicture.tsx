import React, { memo } from 'react';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import { IArtwork } from '../../../../interfaces';

type SelectedProps = {
  selectedArtwork: IArtwork | undefined;
};

const SelectedArtworkPicture = ({ selectedArtwork }: SelectedProps) => {
  return (
    <Grid item xs={12} md={6}>
      <Box sx={{ position: 'relative', minHeight: '450px' }}>
        <Image
          src={selectedArtwork ? selectedArtwork?.url : ''}
          alt={selectedArtwork?.name}
          layout={'fill'}
          objectFit={'contain'}
        />
      </Box>
    </Grid>
  );
};

export default memo(SelectedArtworkPicture);
