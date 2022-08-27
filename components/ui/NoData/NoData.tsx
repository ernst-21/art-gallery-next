import React from 'react';
import { useTranslation } from 'next-i18next';
import { Typography } from '@mui/material';
import PageWidthContainer from '../../layouts/PageWidthContainer';

const NoData = () => {
  const { t } = useTranslation('common');
  return (
    <PageWidthContainer sx={{ textAlign: 'center' }}>
      <Typography>{t('noData')}</Typography>
    </PageWidthContainer>
  );
};

export default NoData;
