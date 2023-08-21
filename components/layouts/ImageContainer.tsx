import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import pencils from '../../public/images/authPages/pencils.jpg';

const ImageContainer = () => {
  return (
    <Box
      sx={{
        height: { md: '100vh' },
        display: { xs: 'none', md: 'flex' },
        position: 'relative',
        width: { md: '40%' },
      }}
    >
      <Image
        layout={'fill'}
        style={{ filter: 'brightness(80%)' }}
        src={pencils}
        alt="logo-image"
        objectFit={'cover'}
      />
    </Box>
  );
};

export default ImageContainer;
