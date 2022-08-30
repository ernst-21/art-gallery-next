import React, { useMemo } from 'react';
import RangeFilter from '../../../../../../components/ui/RangeFilter/RangeFilter';
import { useArtistsFilter } from '../../../../../../context/artists/FilterArtists/FilterArtistsContext';
import { ARTISTS_LIKES_RANGE } from '../../../../constants/filters';

const ArtistsLikesFilter = () => {
  const { artistsFilter, setArtistsFilter } = useArtistsFilter();

  return (
    <RangeFilter
      translation="artists"
      label={'filters.likes'}
      name={'likes'}
      defaultValue={ARTISTS_LIKES_RANGE}
      filter={artistsFilter}
      setFunction={setArtistsFilter}
    />
  );
};

export default ArtistsLikesFilter;
