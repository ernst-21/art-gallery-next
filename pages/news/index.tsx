import { Typography } from '@mui/material';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import { dbNews } from '../../database';
import { NewsArticlesList } from '../../modules/news/containers/NewsArticlesList';

const NewsPage: NextPage = (props) => {
  //@ts-ignore
  const { newsArticles } = props;

  return (
    <MainLayout>
      <NewsArticlesList newsArticles={newsArticles} />
    </MainLayout>
  );
};

export default NewsPage;

export const getStaticProps = async ({ locale }: GetServerSidePropsContext) => {
  const newsArticles = await dbNews.getNewArticles();
  return {
    props: {
      newsArticles,
      //@ts-ignore
      ...(await serverSideTranslations(locale, ['home', 'common'])),
    },
  };
};
