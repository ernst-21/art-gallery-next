import { Box } from '@mui/material';
import React from 'react';
import RangeFilter from '../RangeFilter/RangeFilter';
import {
  LIKES_DEFAULT_VALUES,
  LIKES_FILTER_NAME,
} from '../../../../constants/filters';

const LikesFilter = () => {
  return (
    <Box mt={2}>
      <RangeFilter
        name={LIKES_FILTER_NAME}
        defaultValue={LIKES_DEFAULT_VALUES}
        label={'filters.likes'}
      />
    </Box>
  );
};

export default LikesFilter;
