import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { Box } from '@mui/material';
import useToggle from '../../hooks/utils/useToggle';
import RightDrawerLayout from '../../components/layouts/RightDrawerLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArtworksFilterProvider } from '../../context/artworks/FilterArtworks/FilterArtworkContext';
import ArtworksContainer from '../../modules/artworks/containers/ArtworksContainer';
import { ArtworksFilter } from '../../modules/artworks/components/Filters/ArtworksFilter';
import { FloatingButtons } from '../../components/ui/FloatingButtons';

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
          <FloatingButtons onClick={onOpen} showBelow={250} />
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
