import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import { dbArtworks } from '../../database';
import { IArtwork } from '../../interfaces';
import { ArtworksDetailsContainer } from '../../modules/artworks/containers/ArtworkDetailsContainer';

interface Artwork {
  artwork: IArtwork;
}

const ArtworkDetails: NextPage<Artwork> = ({ artwork }) => {
  return (
    <MainLayout title={artwork.name}>
      <ArtworksDetailsContainer artwork={artwork} />
    </MainLayout>
  );
};

export default ArtworkDetails;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const artworksSlugs = await dbArtworks.getArtworksSlugs();

  return {
    paths: artworksSlugs.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug = '' } = params as { slug: string };
  const artwork = await dbArtworks.getArtworkBySlug(slug);

  if (!artwork) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      artwork,
      //@ts-ignore
      ...(await serverSideTranslations(locale, ['common', 'artworks'])),
    },
    // every 24hrs
    revalidate: 60 * 60 * 24,
  };
};
