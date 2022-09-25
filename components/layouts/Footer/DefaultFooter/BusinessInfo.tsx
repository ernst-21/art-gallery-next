import React, { memo } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import FooterIcons from '../DefaultFooter/FooterIcons';
import PhoneNumber from './PhoneNumber';
import Logo from '../../Navbar/Logo';

const BusinessInfo = () => {
  const { t } = useTranslation('common');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', lg: 'start' },
      }}
    >
      <Logo
        sx={{ color: 'white', mt: -1.5 }}
        secondSx={{ color: 'white', mt: -1.5 }}
      />
      <Typography mt={2} mb={1} sx={{ maxWidth: 344 }}>
        {t('websiteExplanation')}
      </Typography>
      <Typography mt={1} mb={4} sx={{ maxWidth: 344 }}>
        {t('footerPlaceholders')}
      </Typography>
      <PhoneNumber />
      <FooterIcons />
    </Box>
  );
};

export default memo(BusinessInfo);
