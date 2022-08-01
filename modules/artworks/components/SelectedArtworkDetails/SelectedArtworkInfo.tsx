import React, { memo } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { IArtwork } from '../../../../interfaces';

type SelectedProps = {
  selectedArtwork: IArtwork | undefined;
};

const SelectedArtworksInfo = ({ selectedArtwork }: SelectedProps) => {
  return (
    <Grid item xs={12} md={6}>
      <Stack sx={{ paddingX: 2 }}>
        <Typography sx={{ mb: 2 }} variant="h1">
          {selectedArtwork?.name}
        </Typography>
        <Typography sx={{ textTransform: 'capitalize' }} paragraph>
          {selectedArtwork?.category}
        </Typography>
        <Typography paragraph>${selectedArtwork?.price} USD</Typography>
        <Typography paragraph>{selectedArtwork?.artist}</Typography>
        <Typography paragraph>Size: {selectedArtwork?.size}</Typography>
        <Typography sx={{ mb: 4 }} paragraph>
          Voters: {selectedArtwork?.voters?.length}
        </Typography>
        <Typography paragraph>{selectedArtwork?.description}</Typography>
      </Stack>
    </Grid>
  );
};

export default memo(SelectedArtworksInfo);
