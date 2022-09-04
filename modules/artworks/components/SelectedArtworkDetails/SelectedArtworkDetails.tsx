import React from 'react';
import PageWidthContainer from '../../../../components/layouts/PageWidthContainer';
import { Box } from '@mui/material';
import SelectedArtworkPicture from './SelectedArtworkPicture';
import SelectedArtworkInfo from './SelectedArtworkInfo';
import { ArtworkType } from '../../../../types/common.types';

const SelectedArtworkDetails = ({ artwork }: ArtworkType) => {
  if (!artwork) return null;

  return (
    <Box>
      <Box sx={{ my: { xs: 2, md: 6 } }}>
        <PageWidthContainer>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
            }}
          >
            <SelectedArtworkPicture artwork={artwork} />
            <SelectedArtworkInfo artwork={artwork} />
          </Box>
        </PageWidthContainer>
      </Box>
    </Box>
  );
};

export default SelectedArtworkDetails;
