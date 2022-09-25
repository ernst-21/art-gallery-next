import { memo } from 'react';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'next-i18next';
import BusinessInfo from './BusinessInfo';
import FooterMenuGrid from '../FooterMenuGrid';

const DefaultFooterContent = () => {
  const { t } = useTranslation('common');
  return (
    <Stack className={'page-wrapper'} direction={{ xs: 'column', md: 'row' }}>
      <FooterMenuGrid />
    </Stack>
  );
};

export default memo(DefaultFooterContent);
