import { Stack } from '@mui/material';
import React from 'react';
import { ClearFilter } from '../../../../../components/ui/ClearFilter';
import { useArtistsFilter } from '../../../../../context/artists/FilterArtists/FilterArtistsContext';
import { ArtistNameFilter } from '../components/ArtistNameFilter';
import { DisciplineFilter } from '../components/DisciplineFilter';
import { ArtistsLikesFilter } from '../components/LikesFilter';
import { RecommendedArtistsFilter } from '../components/RecommendedArtistsFilter';

const ArtistsFilter = () => {
  const { artistsFilter, setArtistsFilter } = useArtistsFilter();
  return (
    <>
      <ClearFilter filter={artistsFilter} setFunction={setArtistsFilter} />
      <Stack
        sx={{ py: 1, px: 2, h: '100%', overflowX: 'hidden', overflowY: 'auto' }}
        spacing={2}
      >
        <RecommendedArtistsFilter />
        <ArtistNameFilter />
        <ArtistsLikesFilter />
        <DisciplineFilter />
      </Stack>
    </>
  );
};

export default ArtistsFilter;
