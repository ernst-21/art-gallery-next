import React from 'react';
import { Stack } from '@mui/material';
import { CategoryFilter } from '../components/CategoryFilter';
import { PriceFilter } from '../components/PriceFilter';
import { LikesFilter } from '../components/LikesFilter';
import { ArtworksAuthorsFilter } from '../components/ArtworksAuthorsFilter';
import { TagsFilter } from '../components/TagsFilter';
import { GalleriesFilter } from '../components/GalleriesFilter';
import { OrientationFilter } from '../components/OrientationFilter';
import { ColorsFilter } from '../components/ColorsFilter';
import { ClearFilter } from '../../../../../components/ui/ClearFilter';
import { useArtworksFilter } from '../../../../../context/artworks/FilterArtworks/FilterArtworkContext';
import { filterDefaults } from '../../../constants/filters';

const ArtworksFilter = () => {
  const { artworksFilter, setArtworksFilter } = useArtworksFilter();
  return (
    <>
      <ClearFilter filter={artworksFilter} setFunction={setArtworksFilter} />
      <Stack
        sx={{ py: 1, px: 2, h: '100%', overflowX: 'hidden', overflowY: 'auto' }}
      >
        <CategoryFilter />
        <PriceFilter />
        <LikesFilter />
        <Stack spacing={2}>
          <ArtworksAuthorsFilter />
          <TagsFilter />
          <GalleriesFilter />
        </Stack>
        <OrientationFilter />
        <ColorsFilter />
      </Stack>
    </>
  );
};

export default ArtworksFilter;
