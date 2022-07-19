import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';

const ArtistsPage: NextPage = () => {
  return (
    <MainLayout>
      <Typography>Artists page</Typography>
    </MainLayout>
  );
};

export default ArtistsPage;
