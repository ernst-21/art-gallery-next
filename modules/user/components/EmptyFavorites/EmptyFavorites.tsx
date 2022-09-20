import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';

const EmptyFavorites = () => {
  const { t } = useTranslation('common');
  return (
    <Box
      sx={{
        minHeight: 450,
        textAlign: 'center',
        paddingX: 4,
      }}
    >
      <Divider />
      <Typography variant="h1" sx={{ mt: 20 }}>
        {t('noFavoritesYet')}
      </Typography>
      <Typography sx={{ mt: 1 }}>{t('exploreAndChooseFavorites')}</Typography>
    </Box>
  );
};

export default EmptyFavorites;
