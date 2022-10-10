import React from 'react';
import { Stack } from '@mui/material';
import type { GetStaticPropsContext, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MainLayout from '../components/layouts/MainLayout';
import HomeHeaderContainer from '../modules/home/containers/HomeHeaderContainer';
import FeaturedContainer from '../modules/home/containers/FeaturedContainer';
import RecommendedArtistContainer from '../modules/home/containers/RecommendedArtistsContainer';
import TestimonialCarouselContainer from '../modules/home/containers/TestimonialCarouselContainer';
import { GetServerSidePropsContext } from 'next';
import { dbArtworks, dbArtists, dbTestimonials } from '../database';
import { IArtist, IArtwork, ITestimonial } from '../interfaces';
import { ScrollToTop } from '../components/ui/ScrollToTop';

type HomeProps = {
  featured: IArtwork[];
  recommended: IArtist[];
  testimonials: ITestimonial[];
};

const HomePage: NextPage<HomeProps> = ({
  featured,
  recommended,
  testimonials,
}) => {
  return (
    <MainLayout title="Home">
      <Stack>
        <HomeHeaderContainer />
        <FeaturedContainer featured={featured} />
        <RecommendedArtistContainer recommended={recommended} />
        <TestimonialCarouselContainer testimonials={testimonials} />
      </Stack>
      <ScrollToTop
        showBelow={250}
        sx={{
          right: { xs: '5%' },
        }}
      />
    </MainLayout>
  );
};

export default HomePage;

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const featured = await dbArtworks.getFeaturedArtworks();
  const recommended = await dbArtists.getRecommendedArtists();
  const testimonials = await dbTestimonials.getTestimonials();

  return {
    props: {
      featured,
      recommended,
      testimonials,
      //@ts-ignore
      ...(await serverSideTranslations(locale, ['home', 'common'])),
    },
  };
};
