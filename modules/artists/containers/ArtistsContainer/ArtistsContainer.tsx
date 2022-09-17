import React, { useEffect, useMemo } from 'react';
import GridContainer from '../../../../components/ui/GridContainer/GridContainer';
import { useTranslation } from 'react-i18next';
import { useArtistsFilter } from '../../../../context/artists/FilterArtists/FilterArtistsContext';
import { useMutation } from 'react-query';
import { IArtist, IArtistFilter } from '../../../../interfaces';
import { EmptyContainer } from '../../../../components/ui/EmptyContainer';
import SpinLoader from '../../../../components/ui/Spinloader';
import { NoData } from '../../../../components/ui/NoData';
import ArtistGrid from '../../components/ArtistGrid';
import { useRouter } from 'next/router';

type ArtistsResults = {
  artists: IArtist[];
  color?: string;
  translation?: string;
};

const ArtistsContainer = ({ artists, color, translation }: ArtistsResults) => {
  const { t } = useTranslation('artists');
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <EmptyContainer>
        <SpinLoader />
      </EmptyContainer>
    );
  }

  if (!artists || !artists?.length) {
    return (
      <EmptyContainer>
        <NoData />
      </EmptyContainer>
    );
  }

  return (
    <>
      <GridContainer
        sx={{ minHeight: 'calc(100vh - 150px)' }}
        backgroundColor={color || 'secondary.light'}
        title={t(translation || 'artists')}
      >
        <ArtistGrid spacing={4} xs={12} sm={6} lg={3} data={artists} />
      </GridContainer>
    </>
  );
};

export default ArtistsContainer;
