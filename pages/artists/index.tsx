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
import { getArtistsByFilter } from '../../database/dbArtists';

const ArtistsPage: NextPage = (props) => {
  const { isOpen, onClose, onOpen } = useToggle();

  //@ts-ignore
  const { artists } = props;

  return (
    <ArtistsFilterProvider>
      <RightDrawerLayout
        open={isOpen}
        onClose={onClose}
        rightDrawerChildren={<ArtistsFilter />}
      >
        <ArtistsContainer artists={artists} />
        <FloatingButtons onClick={onOpen} showBelow={250} />
      </RightDrawerLayout>
    </ArtistsFilterProvider>
  );
};

export default ArtistsPage;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  query,
}) => {
  const artists = await getArtistsByFilter(query);
  return {
    props: {
      artists,
      //@ts-ignore
      ...(await serverSideTranslations(locale, ['common', 'artists'])),
    },
  };
};
