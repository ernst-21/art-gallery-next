import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';

const NewsPage: NextPage = () => {
  return (
    <MainLayout>
      <Typography>News page</Typography>
    </MainLayout>
  );
};

export default NewsPage;
