import React from 'react';
import PageWidthContainer from '../../../components/layouts/PageWidthContainer';
import SpinLoader from '../../../components/ui/Spinloader';
import GridContainer from '../../../components/ui/GridContainer/GridContainer';
import { NoData } from '../../../components/ui/NoData';
import { EmptyContainer } from '../../../components/ui/EmptyContainer';
import { ResultsGrid } from '../../../components/ui/ResultsGrid';
import { IArtwork } from '../../../interfaces';
import { useRouter } from 'next/router';

type ComponentProps = {
  artworks: IArtwork[];
};

const ArtworksContainer = ({ artworks }: ComponentProps) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <EmptyContainer>
        <SpinLoader />
      </EmptyContainer>
    );
  }

  if (!artworks || !artworks?.length) {
    return (
      <EmptyContainer>
        <NoData />
      </EmptyContainer>
    );
  }

  return (
    <GridContainer
      sx={{ minHeight: 'calc(100vh - 70px)' }}
      backgroundColor={'secondary.light'}
      title={'Artworks'}
    >
      <PageWidthContainer>
        <ResultsGrid data={artworks} isArtwork />
      </PageWidthContainer>
    </GridContainer>
  );
};

export default ArtworksContainer;
