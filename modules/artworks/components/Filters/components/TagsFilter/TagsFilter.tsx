import React from 'react';
import { Box } from '@mui/material';
import { useArtworksFilter } from '../../../../../../context/artworks/FilterArtworks/FilterArtworkContext';
import { TAGS } from '../../../../constants/filters';
import { SelectMultipleFilter } from '../../../../../../components/ui/SelectMultipleFilter';

const TagsFilter = () => {
  const { artworksFilter, setArtworksFilter } = useArtworksFilter();
  return (
    <Box sx={{ mt: 2 }}>
      <SelectMultipleFilter
        filter={artworksFilter}
        setFunction={setArtworksFilter}
        options={TAGS}
        name={'tags'}
        label={'Tags'}
      />
    </Box>
  );
};

export default TagsFilter;
