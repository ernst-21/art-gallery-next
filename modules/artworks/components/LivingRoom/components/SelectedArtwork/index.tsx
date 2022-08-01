import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useSelectedArtwork } from '../../../../../../context/artworks/selectedArtwork/SelectedArtworkContext';
import HangingArtwork from './HangingArtwork';
import NoSelected from './NoSelected';

const SelectedArtwork = () => {
  const { t } = useTranslation('artworks');
  const { selectedArtwork } = useSelectedArtwork();
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
      {selectedArtwork ? (
        <HangingArtwork />
      ) : (
        <NoSelected t={t('hangItHere')} />
      )}
    </Box>
  );
};

export default SelectedArtwork;
