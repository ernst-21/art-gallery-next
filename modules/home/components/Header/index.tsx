import { Box, Typography } from '@mui/material';
import React from 'react';
import Home from '../../../../public/images/home/home.jpg';
import Image from 'next/image';

const HomeHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: { xs: '50vh', sm: 'calc(80vh - 70px)' },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          width: '100%',
          filter: 'brightness(50%)',
        }}
      >
        <Image priority layout="fill" objectFit="cover" src={Home} alt="home" />
      </Box>

      <Typography
        sx={{
          color: 'white',
          position: 'absolute',
          zIndex: 9,
          fontSize: { xs: 32, sm: 64 },
        }}
        variant="h1"
      >
        Artworks website
      </Typography>
    </Box>
  );
};

export default HomeHeader;
