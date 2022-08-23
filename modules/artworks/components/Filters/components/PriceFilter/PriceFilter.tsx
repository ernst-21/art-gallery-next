import React from 'react';
import RangeFilter from '../RangeFilter/RangeFilter';
import {
  PRICE_DEFAULT_VALUES,
  PRICE_FILTER_NAME,
} from '../../../../constants/filters';

const PriceFilter = () => {
  return (
    <RangeFilter
      label="filters.price"
      name={PRICE_FILTER_NAME}
      defaultValue={PRICE_DEFAULT_VALUES}
    />
  );
};

export default PriceFilter;
