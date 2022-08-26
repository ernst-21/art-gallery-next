import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { Box, Button } from '@mui/material';
import useToggle from '../../hooks/utils/useToggle';
import RightDrawerLayout from '../../components/layouts/RightDrawerLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArtworksFilterProvider,
  useArtworksFilter,
} from '../../context/artworks/FilterArtworks/FilterArtworkContext';
import ArtworksContainer from '../../modules/artworks/containers/ArtworksContainer';
import { CategoryFilter } from '../../modules/artworks/components/Filters/components/CategoryFilter';
import { ArtworksFilter } from '../../modules/artworks/components/Filters/ArtworksFilter';

const ArtworksPage: NextPage = (props) => {
  const { onOpen, isOpen, onClose } = useToggle();

  return (
    <ArtworksFilterProvider>
      <RightDrawerLayout
        onClose={onClose}
        open={isOpen}
        rightDrawerChildren={<ArtworksFilter />}
      >
        <Box sx={{ minHeight: 'calc(100vh - 70px)' }}>
          <ArtworksContainer />
          <Button
            fullWidth={false}
            sx={{ display: { xs: 'block', md: 'none' } }}
            variant="outlined"
            onClick={onOpen}
          >
            Filters
          </Button>
        </Box>
      </RightDrawerLayout>
    </ArtworksFilterProvider>
  );
};

export default ArtworksPage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      //@ts-ignore
      ...(await serverSideTranslations(locale, ['common', 'artworks'])),
    },
  };
};
