import { Box, Divider } from '@mui/material';
import React from 'react';
import { SelectFilter } from '../../../../../../components/ui/SelectFilter';
import { useArtworksFilter } from '../../../../../../context/artworks/FilterArtworks/FilterArtworkContext';
import { filterDefaults } from '../../../../constants/filters';

const GalleriesFilter = () => {
  const { artworksFilter, setArtworksFilter } = useArtworksFilter();
  return (
    <Box>
      <SelectFilter
        filter={artworksFilter}
        setFunction={setArtworksFilter}
        defaultValue={filterDefaults.gallery}
        name={'gallery'}
        label={'Gallery'}
        options={filterDefaults.gallery}
      />
      <Divider sx={{ my: 2 }} />
    </Box>
  );
};

export default GalleriesFilter;
