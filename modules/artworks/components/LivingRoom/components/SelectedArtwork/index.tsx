import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';

type NoSelectedProps = {
  t: any;
};

const NoSelected = ({ t }: NoSelectedProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '80%',
        width: '40%',
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'lightgray',
        border: '2px solid lightgray',
      }}
    >
      <Typography sx={{ fontSize: 24, textAlign: 'center' }}>{t}</Typography>
    </Box>
  );
};

const SelectedArtwork = () => {
  const { t } = useTranslation('artworks');
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: { md: '40%' },
        height: { xs: '40%' },
        zIndex: 9,
        marginTop: { xs: '20px', md: '50px' },
      }}
    >
      <NoSelected t={t('hangItHere')} />
    </Box>
  );
};

export default SelectedArtwork;
