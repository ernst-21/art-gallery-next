import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import { ScrollToTop } from '../../components/ui/ScrollToTop';
import { dbArtists } from '../../database';
import { ArtistDetailsContainer } from '../../modules/artists/containers/ArtistDetails';

const ArtistPage: NextPage = (props) => {
  //@ts-ignore
  const { artist } = props;
  return (
    <MainLayout title={artist.name}>
      <ArtistDetailsContainer artist={artist} />
      <ScrollToTop
        showBelow={250}
        sx={{
          right: { xs: '5%' },
        }}
      />
    </MainLayout>
  );
};

export default ArtistPage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const artistIdentifiers = await dbArtists.getArtistIdentifiers();

  return {
    paths: artistIdentifiers.map(({ identifier }) => ({
      params: {
        identifier,
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { identifier = '' } = params as { identifier: string };
  const artist = await dbArtists.getArtistByIdentifier(identifier);

  if (!artist) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      artist,
      //@ts-ignore
      ...(await serverSideTranslations(locale, ['common', 'artists'])),
    },
    // every 24hrs
    revalidate: 60 * 60 * 24,
  };
};
