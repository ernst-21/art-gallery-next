import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'next-i18next';
import HangingArtwork from './HangingArtwork';
import NoSelected from './NoSelected';
import { ArtworkType } from '../../../../../../types/common.types';

const SelectedArtwork = ({ artwork }: ArtworkType) => {
  const { t } = useTranslation('artworks');
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: { xs: '60%', lg: '40%' },
        height: { xs: '40%' },
        zIndex: 9,
        marginTop: { xs: '20px', md: '30px' },
      }}
    >
      {artwork ? (
        <HangingArtwork artwork={artwork} />
      ) : (
        <NoSelected t={t('hangItHere')} />
      )}
    </Box>
  );
};

export default SelectedArtwork;
