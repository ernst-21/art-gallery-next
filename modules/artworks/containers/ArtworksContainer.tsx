import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { searchArtworks } from '../services/artworks-api';
import { filterDefaults } from '../constants/filters';
import PageWidthContainer from '../../../components/layouts/PageWidthContainer';
import { useArtworksFilter } from '../../../context/artworks/FilterArtworks/FilterArtworkContext';
import SpinLoader from '../../../components/ui/Spinloader';
import GridContainer from '../../../components/ui/GridContainer/GridContainer';
import { NoData } from '../../../components/ui/NoData';
import { EmptyContainer } from '../../../components/ui/EmptyContainer';
import { ResultsGrid } from '../../../components/ui/ResultsGrid';
import { IArtworksFilter } from '../../../interfaces';

type ArtworkFilter = {
  filter?: IArtworksFilter;
};

const ArtworksContainer = () => {
  const { artworksFilter } = useArtworksFilter();
  const {
    mutateAsync: findArtworks,
    data,
    isLoading,
    isError,
  } = useMutation(['filter', artworksFilter], (filter: ArtworkFilter) =>
    searchArtworks(filter)
  );

  useEffect(() => {
    findArtworks({ filter: artworksFilter });
  }, [findArtworks, artworksFilter]);

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
    <GridContainer backgroundColor={'secondary.light'} title={'Artworks'}>
      <PageWidthContainer>
        <ResultsGrid data={data} isArtwork />
      </PageWidthContainer>
    </GridContainer>
  );
};

export default ArtworksContainer;
