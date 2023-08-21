import React, { useMemo } from 'react';
import { Box, Popover } from '@mui/material';
import Image from 'next/image';
import SocialIconsList from '../SocialIconsList/SocialIconsList';
import { ArtworkType } from '../../../../../../types/common.types';

const HangingArtwork = ({ artwork }: ArtworkType) => {
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
    return artwork?.size === 'big'
      ? '100%'
      : artwork?.size === 'small'
      ? '50%'
      : '70%';
  }, [artwork?.size]);

  return (
    <>
      <Box
        aria-describedby={id}
        onClick={handleClick}
        sx={{
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '50%',
          height: selectedArtworkHeight,
          minWidth: { xs: '60%', md: '30%' },
          opacity: 0.8,
          backgroundColor: 'white',
          padding: 1,
          border: '3px solid #3d3d3d',
          boxShadow: '-3px 5px 15px -6px #000000',
          cursor: 'pointer',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${artwork?.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
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
        <SocialIconsList url={artwork?.url} />
      </Popover>
    </>
  );
};

export default HangingArtwork;
