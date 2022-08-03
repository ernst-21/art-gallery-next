import React, { useMemo } from 'react';
import { useSelectedArtwork } from '../../../../../../context/artworks/selectedArtwork/SelectedArtworkContext';
import { Box, Popover } from '@mui/material';
import Image from 'next/image';
import SocialIconsList from '../SocialIconsList/SocialIconsList';

const HangingArtwork = () => {
  const { selectedArtwork } = useSelectedArtwork();
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
    <>
      <Box
        aria-describedby={id}
        onClick={handleClick}
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
          cursor: 'pointer',
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
      <Popover
        id={id}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <SocialIconsList url={selectedArtwork?.url} />
      </Popover>
    </>
  );
};

export default HangingArtwork;
