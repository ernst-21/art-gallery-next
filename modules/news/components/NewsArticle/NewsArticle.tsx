import React, { memo } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { INewArticle } from '../../../../interfaces';
import PageWidthContainer from '../../../../components/layouts/PageWidthContainer';
import moment from 'moment';

type NewsArticleType = {
  sx?: {};
  isLeft?: boolean;
};

const NewsArticle = ({
  image,
  text,
  createdAt,
  isLeft = false,
  title,
}: NewsArticleType & INewArticle) => {
  return (
    <Box sx={{ backgroundColor: !isLeft ? 'secondary.light' : null }}>
      <PageWidthContainer
        sx={{
          display: 'flex',
          paddingY: 8,
          flexDirection: { xs: 'column', md: isLeft ? 'row' : 'row-reverse' },
          minHeight: '200px',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ position: 'relative', width: { xs: '100%', md: '45%' } }}>
          <Image
            src={image}
            layout="responsive"
            objectFit="cover"
            alt={title}
            height={50}
            width={'100%'}
          />
        </Box>

        <Stack sx={{ width: { xs: '100%', md: '45%' }, mt: { xs: 2, md: 0 } }}>
          <Typography variant="h1" sx={{ fontWeight: 500, my: 1 }}>
            {title}
          </Typography>

          <Typography sx={{ mb: 3, color: 'gray', fontStyle: 'italic' }}>
            {moment(new Date(createdAt!)).startOf('hour').fromNow()}
          </Typography>
          <Typography>{text}</Typography>
        </Stack>
      </PageWidthContainer>
    </Box>
  );
};

export default memo(NewsArticle);
