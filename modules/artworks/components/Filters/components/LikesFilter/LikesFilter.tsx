import { Box, Divider } from '@mui/material';
import React from 'react';
import RangeFilter from '../../../../../../components/ui/RangeFilter/RangeFilter';
import { useArtworksFilter } from '../../../../../../context/artworks/FilterArtworks/FilterArtworkContext';
import {
  LIKES_DEFAULT_VALUES,
  LIKES_FILTER_NAME,
} from '../../../../constants/filters';

const LikesFilter = () => {
  const { artworksFilter, setArtworksFilter } = useArtworksFilter();
  return (
    <Box mt={2}>
      <RangeFilter
        translation="artworks"
        filter={artworksFilter}
        setFunction={setArtworksFilter}
        name={LIKES_FILTER_NAME}
        defaultValue={LIKES_DEFAULT_VALUES}
        label={'filters.likes'}
      />
      <Divider sx={{ my: 2 }} />
    </Box>
  );
};

export default LikesFilter;
