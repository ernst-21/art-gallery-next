import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { SelectFilter } from '../../../../../../components/ui/SelectFilter';
import { useArtworksFilter } from '../../../../../../context/artworks/FilterArtworks/FilterArtworkContext';
import { IArtist } from '../../../../../../interfaces';
import { getArtists } from '../../../../services/artworks-api';

const ArtworksAuthorsFilter = () => {
  const { artworksFilter, setArtworksFilter } = useArtworksFilter();
  const { data, isLoading, isError } = useQuery(['filterArtists'], getArtists);

  const artists = useMemo(() => {
    return data?.map((item: IArtist) => item.name);
  }, [data]);

  return (
    <SelectFilter
      filter={artworksFilter}
      isError={isError}
      isLoading={isLoading}
      setFunction={setArtworksFilter}
      name={'artist'}
      label={'Artist'}
      options={artists}
    />
  );
};

export default ArtworksAuthorsFilter;
