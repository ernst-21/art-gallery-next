import React, { memo } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Socials from '@/modules/shops/components/Socials/ShopSocials';

type FooterProps = {}

const socialMock = {
  public_facebook: true,
  facebook: '/facebook',
  public_twitter: true,
  twitter: '/twitter',
  public_instagram: true,
  instagram: '/instagram',
}

const BusinessInfo = () => {

  const { t } = useTranslation('common');
  return (
    <Box>
      <Image src={'/images/logo-w.png'}
             width={92.5} height={40} alt={'Plataforma de comercio electrónico'} />
      <Typography mt={2} mb={4} sx={{maxWidth: 344}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Typography>

      <Socials {...socialMock} />
    </Box>
  );
};

export default memo(BusinessInfo);
