import React from 'react';
import { Box } from '@mui/material';
import wall from '../../../../../../public/images/living-room/wall.jpg';
import Image from 'next/image';
import SelectedArtwork from '../SelectedArtwork';

const styles = {
  boxContainer: {
    backgroundImage: `url(${wall})`,
  },
};

const Room = () => {
  return (
    <Box
      style={styles.boxContainer}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: { xs: '45vh', sm: '60vh', md: '100vh' },
        position: 'relative',
      }}
    >
      <SelectedArtwork />
      <Image priority layout="fill" objectFit={'cover'} src={wall} alt="home" />
    </Box>
  );
};

export default Room;
