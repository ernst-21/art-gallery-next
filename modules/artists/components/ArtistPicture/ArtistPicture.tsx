import React, { memo } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { ArtistType } from '../../../../types/common.types';
import { useIsMobile } from '../../../../hooks/utils/useIsMobile';

const ArtistPicture = ({ artist }: ArtistType) => {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: '100%', md: '50%' },
        height: { xs: 250, md: 450 },
      }}
    >
      <Image
        src={artist.pic}
        alt={artist.name}
        layout="fill"
        objectFit={isMobile ? 'contain' : 'cover'}
      />
    </Box>
  );
};

export default memo(ArtistPicture);
