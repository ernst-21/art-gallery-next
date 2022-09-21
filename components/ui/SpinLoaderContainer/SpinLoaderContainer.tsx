import { Box } from '@mui/material';
import React from 'react';
import SpinLoader from '../Spinloader';

const SpinLoaderContainer = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems="center"
      sx={{
        width: { xs: '100%', md: '60%' },
        height: '400px',
        backgroundColor: 'secondary.light',
      }}
    >
      <SpinLoader />
    </Box>
  );
};

export default SpinLoaderContainer;
