import React from 'react';
import { SelectFilter } from '../../../../../../components/ui/SelectFilter';
import { useArtworksFilter } from '../../../../../../context/artworks/FilterArtworks/FilterArtworkContext';
import { filterDefaults } from '../../../../constants/filters';

const ArtworksAuthorsFilter = () => {
  const { artworksFilter, setArtworksFilter } = useArtworksFilter();
  return (
    <SelectFilter
      filter={artworksFilter}
      setFunction={setArtworksFilter}
      defaultValue={filterDefaults.artist}
      name={'artist'}
      label={'Artist'}
      options={filterDefaults.artist}
    />
  );
};

export default ArtworksAuthorsFilter;
