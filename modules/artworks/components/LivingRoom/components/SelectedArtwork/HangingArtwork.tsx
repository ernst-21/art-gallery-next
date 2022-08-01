import { useSelectedArtwork } from '../../../../../../context/artworks/selectedArtwork/SelectedArtworkContext';
import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

const HangingArtwork = () => {
  const { selectedArtwork } = useSelectedArtwork();

  const selectedArtworkHeight = useMemo(() => {
    return selectedArtwork?.size === 'big'
      ? '100%'
      : selectedArtwork?.size === 'small'
      ? '50%'
      : '70%';
  }, [selectedArtwork?.size]);

  const selectedArtworkWidth = useMemo(() => {
    if (
      selectedArtwork?.size === 'big' &&
      selectedArtwork.orientation === 'landscape'
    ) {
      return '100%';
    }
    if (
      selectedArtwork?.size === 'small' &&
      selectedArtwork.orientation === 'landscape'
    ) {
      return '40%';
    }
    if (
      selectedArtwork?.size === 'medium' &&
      selectedArtwork.orientation === 'landscape'
    ) {
      return '70%';
    }
    return '50%';
  }, [selectedArtwork?.orientation, selectedArtwork?.size]);

  return (
    <Box
      sx={{
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        height: selectedArtworkHeight,
        width: selectedArtworkWidth,
        opacity: 0.8,
        backgroundColor: 'white',
        padding: 1,
        border: '3px solid #3d3d3d',
        boxShadow: '-3px 5px 15px -6px #000000',
      }}
    >
      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image
          blurDataURL={selectedArtwork?.url}
          placeholder={selectedArtwork?.url ? 'blur' : undefined}
          src={selectedArtwork ? selectedArtwork?.url : ''}
          layout="fill"
          objectFit={'contain'}
          alt={selectedArtwork?.name}
        />
      </Box>
    </Box>
  );
};

export default HangingArtwork;
