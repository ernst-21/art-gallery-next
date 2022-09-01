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
import { getArtworksByQuery } from '../../database/dbArtworks';
import { getSession } from 'next-auth/react';

const ArtworksPage: NextPage = (props) => {
  const { onOpen, isOpen, onClose } = useToggle();

  //@ts-ignore
  const { artworks } = props;

  return (
    <ArtworksFilterProvider>
      <RightDrawerLayout
        title={'Artworks'}
        onClose={onClose}
        open={isOpen}
        rightDrawerChildren={<ArtworksFilter />}
      >
        <Box sx={{ minHeight: 'calc(100vh - 70px)' }}>
          <ArtworksContainer artworks={artworks} />
          <FloatingButtons onClick={onOpen} showBelow={250} />
        </Box>
      </RightDrawerLayout>
    </ArtworksFilterProvider>
  );
};

export default ArtworksPage;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
  query,
}) => {
  const session = await getSession({ req });
  //@ts-ignore
  const userId = session?.user?._id;

  const artworks = await getArtworksByQuery(query, userId);

  return {
    props: {
      artworks,
      //@ts-ignore
      ...(await serverSideTranslations(locale, ['common', 'artworks'])),
    },
  };
};
