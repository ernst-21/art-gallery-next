import { Box, Typography } from '@mui/material';
import React from 'react';
import MainLayout from '../components/layouts/MainLayout';

const Custom404 = () => {
  return (
    <MainLayout>
      <Box
        display={'flex'}
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <Typography
          variant="h1"
          component={'h1'}
          fontSize={80}
          fontWeight={200}
        >
          404 |
        </Typography>
        <Typography marginLeft={2}>Page not found</Typography>
      </Box>
    </MainLayout>
  );
};

export default Custom404;
