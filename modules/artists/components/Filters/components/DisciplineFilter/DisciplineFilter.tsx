import { useTranslation } from 'next-i18next';
import React from 'react';
import { SelectFilter } from '../../../../../../components/ui/SelectFilter';
import { useArtistsFilter } from '../../../../../../context/artists/FilterArtists/FilterArtistsContext';
import { artistFiltersDefaults } from '../../../../constants/filters';

const DisciplineFilter = () => {
  const { artistsFilter, setArtistsFilter } = useArtistsFilter();
  const { t } = useTranslation('artists');
  return (
    <SelectFilter
      capitalize
      filter={artistsFilter}
      setFunction={setArtistsFilter}
      name={'discipline'}
      label={t('filters.discipline')}
      options={artistFiltersDefaults.discipline}
    />
  );
};

export default DisciplineFilter;
