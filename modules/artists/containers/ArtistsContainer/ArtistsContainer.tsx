import React, { useEffect, useMemo } from 'react';
import GridContainer from '../../../../components/ui/GridContainer/GridContainer';
import { useTranslation } from 'react-i18next';
import { useArtistsFilter } from '../../../../context/artists/FilterArtists/FilterArtistsContext';
import { useMutation } from 'react-query';
import { IArtist, IArtistFilter } from '../../../../interfaces';
import { searchArtistsByFilter } from '../../services/artists-api';
import { EmptyContainer } from '../../../../components/ui/EmptyContainer';
import SpinLoader from '../../../../components/ui/Spinloader';
import { NoData } from '../../../../components/ui/NoData';
import ArtistGrid from '../../components/ArtistGrid';
import { useRouter } from 'next/router';
import qs from 'qs';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
//import { ParsedUrlQuery } from 'querystring';

type ArtistsFilter = {
  filter?: IArtistFilter;
};

type ArtistsResults = {
  artists: IArtist[];
};

const ArtistsContainer = ({ artists }: ArtistsResults) => {
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
        backgroundColor={'secondary.light'}
        title={t('artists')}
      >
        <ArtistGrid spacing={4} xs={12} sm={6} lg={3} data={artists} />
      </GridContainer>
    </>
  );
};

export default ArtistsContainer;
