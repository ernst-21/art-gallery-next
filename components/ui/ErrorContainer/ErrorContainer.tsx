import { Box, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import React from 'react';

const ErrorContainer = () => {
  const { t } = useTranslation('common');
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems="center"
      sx={{
        width: { xs: '100%', md: '60%' },
        height: '400px',
        backgroundColor: 'secondary.light',
      }}
    >
      <Typography variant="h2">{t('networkError')}</Typography>
    </Box>
  );
};

export default ErrorContainer;
