import React from 'react';
import PageWidthContainer from '../../../../components/layouts/PageWidthContainer';
import { Box, Grid } from '@mui/material';
import { useSelectedArtwork } from '../../../../context/artworks/selectedArtwork/SelectedArtworkContext';
import SelectedArtworkPicture from './SelectedArtworkPicture';
import SelectedArtworkInfo from './SelectedArtworkInfo';

const SelectedArtworkDetails = () => {
  const { selectedArtwork } = useSelectedArtwork();

  if (!selectedArtwork) return null;

  return (
    <Box sx={{ backgroundColor: 'secondary.light' }}>
      <Box sx={{ my: { xs: 2, md: 6 } }}>
        <PageWidthContainer>
          <Grid spacing={2} container>
            <SelectedArtworkPicture selectedArtwork={selectedArtwork} />
            <SelectedArtworkInfo selectedArtwork={selectedArtwork} />
          </Grid>
        </PageWidthContainer>
      </Box>
    </Box>
  );
};

export default SelectedArtworkDetails;
