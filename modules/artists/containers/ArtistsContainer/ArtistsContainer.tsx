import React, { useEffect } from 'react';
import GridContainer from '../../../../components/ui/GridContainer/GridContainer';
import { useTranslation } from 'react-i18next';
import { useArtistsFilter } from '../../../../context/artists/FilterArtists/FilterArtistsContext';
import { useMutation } from 'react-query';
import { IArtistFilter } from '../../../../interfaces';
import { searchArtistsByFilter } from '../../services/artists-api';
import { EmptyContainer } from '../../../../components/ui/EmptyContainer';
import SpinLoader from '../../../../components/ui/Spinloader';
import { NoData } from '../../../../components/ui/NoData';
import ArtistGrid from '../../components/ArtistGrid';
import { ScrollToTop } from '../../../../components/ui/ScrollToTop';

type ArtistsFilter = {
  filter?: IArtistFilter;
};

const ArtistsContainer = () => {
  const { t } = useTranslation('artists');
  const { artistsFilter } = useArtistsFilter();
  const {
    mutateAsync: findArtists,
    data,
    isLoading,
    isError,
  } = useMutation(['filter', artistsFilter], (filter: ArtistsFilter) =>
    searchArtistsByFilter(filter)
  );

  useEffect(() => {
    findArtists({ filter: artistsFilter });
  }, [findArtists, artistsFilter]);

  if (isLoading) {
    return (
      <EmptyContainer>
        <SpinLoader />
      </EmptyContainer>
    );
  }

  if (isError || !data || !data?.length) {
    return (
      <EmptyContainer>
        <NoData />
      </EmptyContainer>
    );
  }

  return (
    <>
      <GridContainer backgroundColor={'secondary.light'} title={t('artists')}>
        <ArtistGrid spacing={4} xs={12} sm={6} lg={3} data={data} />
      </GridContainer>
      <ScrollToTop showBelow={250} />
    </>
  );
};

export default ArtistsContainer;
