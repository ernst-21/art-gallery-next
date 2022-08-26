import React from 'react';
import { Box } from '@mui/material';
import { useArtworksFilter } from '../../../../../../context/artworks/FilterArtworks/FilterArtworkContext';
import { filterDefaults } from '../../../../constants/filters';
import { SelectMultipleFilter } from '../../../../../../components/ui/SelectMultipleFilter';

const TagsFilter = () => {
  const { artworksFilter, setArtworksFilter } = useArtworksFilter();
  return (
    <Box sx={{ mt: 2 }}>
      <SelectMultipleFilter
        filter={artworksFilter}
        setFunction={setArtworksFilter}
        defaultValue={filterDefaults.tags}
        options={filterDefaults.tags}
        name={'tags'}
        label={'Tags'}
      />
    </Box>
  );
};

export default TagsFilter;
