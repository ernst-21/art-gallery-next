import { Stack } from '@mui/material';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MainLayout from '../components/layouts/MainLayout';
import HomeHeaderContainer from '../modules/home/containers/HomeHeaderContainer';
import FeaturedContainer from '../modules/home/containers/FeaturedContainer';
import RecommendedArtistContainer from '../modules/home/containers/RecommendedArtistsContainer';
import TestimonialCarouselContainer from '../modules/home/containers/TestimonialCarouselContainer';
import { GetServerSidePropsContext } from 'next';
import React from 'react';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Stack>
        <HomeHeaderContainer />
        <FeaturedContainer />
        <RecommendedArtistContainer />
        <TestimonialCarouselContainer />
      </Stack>
    </MainLayout>
  );
};

export default HomePage;

export const getStaticProps = async ({
  locale,
}: GetServerSidePropsContext) => ({
  props: {
    //@ts-ignore
    ...(await serverSideTranslations(locale, ['home', 'common'])),
  },
});
