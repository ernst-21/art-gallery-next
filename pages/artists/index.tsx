import { Button, Typography } from '@mui/material';
import type { NextPage } from 'next';
import React from 'react';
import RightDrawerLayout from '../../components/layouts/RightDrawerLayout';
import useToggle from '../../hooks/utils/useToggle';
import { ArtistsFilterProvider } from '../../context/artists/FilterArtists/FilterArtistsContext';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArtistsContainer } from '../../modules/artists/containers/ArtistsContainer';
import { ArtistsFilter } from '../../modules/artists/components/Filters/ArtistsFilter';

const ArtistsPage: NextPage = () => {
  const { isOpen, onClose, onOpen } = useToggle();
  return (
    <ArtistsFilterProvider>
      <RightDrawerLayout
        open={isOpen}
        onClose={onClose}
        rightDrawerChildren={<ArtistsFilter />}
      >
        <ArtistsContainer />
        <Button
          fullWidth={false}
          sx={{ display: { xs: 'block', md: 'none' } }}
          variant="outlined"
          onClick={onOpen}
        >
          Filters
        </Button>
      </RightDrawerLayout>
    </ArtistsFilterProvider>
  );
};

export default ArtistsPage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      //@ts-ignore
      ...(await serverSideTranslations(locale, ['common', 'artists'])),
    },
  };
};
