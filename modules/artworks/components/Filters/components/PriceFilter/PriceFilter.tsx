import React from 'react';
import RangeFilter from '../../../../../../components/ui/RangeFilter/RangeFilter';
import { useArtworksFilter } from '../../../../../../context/artworks/FilterArtworks/FilterArtworkContext';
import {
  PRICE_DEFAULT_VALUES,
  PRICE_FILTER_NAME,
} from '../../../../constants/filters';

const PriceFilter = () => {
  const { artworksFilter, setArtworksFilter } = useArtworksFilter();
  return (
    <RangeFilter
      translation="artworks"
      label="filters.price"
      filter={artworksFilter}
      setFunction={setArtworksFilter}
      name={PRICE_FILTER_NAME}
      defaultValue={PRICE_DEFAULT_VALUES}
    />
  );
};

export default PriceFilter;
