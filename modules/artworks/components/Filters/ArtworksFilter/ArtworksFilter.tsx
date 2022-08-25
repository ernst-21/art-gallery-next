import React from 'react';
import { Stack } from '@mui/material';
import { CategoryFilter } from '../components/CategoryFilter';
import { PriceFilter } from '../components/PriceFilter';
import { LikesFilter } from '../components/LikesFilter';
import { ArtworksAuthorsFilter } from '../components/ArtworksAuthorsFilter';
import { ThematicFilter } from '../components/TagsFilter';
import { GalleriesFilter } from '../components/GalleriesFilter';
import { OrientationFilter } from '../components/OrientationFilter';

const ArtworksFilter = () => {
  return (
    <Stack padding={2}>
      <CategoryFilter />
      <PriceFilter />
      <LikesFilter />
      <Stack spacing={2}>
        <ArtworksAuthorsFilter />
        <ThematicFilter />
        <GalleriesFilter />
      </Stack>
      <OrientationFilter />
    </Stack>
  );
};

export default ArtworksFilter;
