import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { AutoCompleteFilter } from '../../../../../../components/ui/AutoCompleteFilter';
import { useArtistsFilter } from '../../../../../../context/artists/FilterArtists/FilterArtistsContext';
import { IArtist } from '../../../../../../interfaces';
import { getAllArtists } from '../../../../services/artists-api';

const ArtistNameFilter = () => {
  const { artistsFilter, setArtistsFilter } = useArtistsFilter();
  const [options, setOptions] = useState<IArtist[]>([]);
  const { mutateAsync: searchArtists, isLoading } = useMutation(
    ['artistByName'],
    () => getAllArtists(),
    {
      onSuccess: (data: IArtist[]) => setOptions(data),
    }
  );

  const getOptionLabel = (option: any) => {
    if (option && typeof option === 'object') return option.name;
    if (option && typeof option === 'string') return option;
    return '';
  };

  return (
    <AutoCompleteFilter
      label={'Name'}
      filter={artistsFilter}
      setFilterFunction={setArtistsFilter}
      options={options}
      name={'name'}
      searchFn={() => searchArtists()}
      isLoading={isLoading}
      equalToValueFn={(option: any, value: any): boolean =>
        option.name === value
      }
      optionLabelFn={(option: any) => getOptionLabel(option)}
    />
  );
};

export default ArtistNameFilter;
