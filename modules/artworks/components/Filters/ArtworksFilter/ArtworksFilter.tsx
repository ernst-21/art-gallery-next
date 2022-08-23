import React from 'react';
import { Stack } from '@mui/material';
import { CategoryFilter } from '../components/CategoryFilter';
import { PriceFilter } from '../components/PriceFilter';

const ArtworksFilter = () => {
  return (
    <Stack padding={2}>
      <CategoryFilter />
      <PriceFilter />
    </Stack>
  );
};

export default ArtworksFilter;
