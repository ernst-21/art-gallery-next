import React, { memo } from 'react';
import { Box } from '@mui/material';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import { IArtwork } from '../../../../interfaces';

type SelectedProps = {
  artwork: IArtwork | undefined;
};

const SelectedArtworkPicture = ({ artwork }: SelectedProps) => {
  if (!artwork?.url || !artwork) return null;

  return (
    <Box
      sx={{
        maxWidth: { xs: '100%', md: '50%' },
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <InnerImageZoom src={artwork ? artwork?.url : ''} zoomScale={2} />
    </Box>
  );
};

export default memo(SelectedArtworkPicture);
