import { Stack, Typography } from '@mui/material';
import React from 'react';
import { INewArticle } from '../../../../interfaces';
import { NewsArticle } from '../../components/NewsArticle';

type NewsArticlesArray = {
  newsArticles: INewArticle[];
};

const NewsArticlesList = ({ newsArticles }: NewsArticlesArray) => {
  return (
    <Stack>
      {newsArticles.map((item: INewArticle, index: number) => (
        <NewsArticle key={index} {...item} isLeft={index % 2 === 0} />
      ))}
    </Stack>
  );
};

export default NewsArticlesList;
