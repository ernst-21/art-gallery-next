import React, { memo } from 'react';
import { Box, Chip } from '@mui/material';
import { ArtworkType } from '../../../../../../types/common.types';

const SelectedArtworkTags = ({ artwork }: ArtworkType) => {
  return (
    <Box display={'flex'} flexWrap={'wrap'}>
      {artwork.tags.map((item: string) => (
        <Chip sx={{ mr: 1 }} key={item} label={item} />
      ))}
    </Box>
  );
};

export default memo(SelectedArtworkTags);
