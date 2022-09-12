import React, { memo } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { ArtistType } from '../../../../types/common.types';

const ArtistPicture = ({ artist }: ArtistType) => {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: '50%' },
      }}
    >
      <Image
        src={artist.pic}
        alt={artist.name}
        layout="responsive"
        width={300}
        height={150}
        objectFit={'contain'}
      />
    </Box>
  );
};

export default memo(ArtistPicture);
