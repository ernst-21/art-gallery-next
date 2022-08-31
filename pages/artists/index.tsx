import React from 'react';
import type { NextPage } from 'next';
import RightDrawerLayout from '../../components/layouts/RightDrawerLayout';
import useToggle from '../../hooks/utils/useToggle';
import { ArtistsFilterProvider } from '../../context/artists/FilterArtists/FilterArtistsContext';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArtistsContainer } from '../../modules/artists/containers/ArtistsContainer';
import { ArtistsFilter } from '../../modules/artists/components/Filters/ArtistsFilter';
import { FloatingButtons } from '../../components/ui/FloatingButtons';

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
        <FloatingButtons onClick={onOpen} showBelow={250} />
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
