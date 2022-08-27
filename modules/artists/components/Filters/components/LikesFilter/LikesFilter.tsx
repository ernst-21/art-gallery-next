import React from 'react';
import RangeFilter from '../../../../../../components/ui/RangeFilter/RangeFilter';
import { useArtistsFilter } from '../../../../../../context/artists/FilterArtists/FilterArtistsContext';
import { artistFiltersDefaults } from '../../../../constants/filters';

const ArtistsLikesFilter = () => {
  const { artistsFilter, setArtistsFilter } = useArtistsFilter();

  return (
    <RangeFilter
      translation="artists"
      label={'filters.likes'}
      name={'likes'}
      defaultValue={artistFiltersDefaults.likes}
      filter={artistsFilter}
      setFunction={setArtistsFilter}
    />
  );
};

export default ArtistsLikesFilter;
