import React from 'react';
import { Box } from '@mui/material';
import wall from '../../../../../../public/images/living-room/wall.jpg';
import Image from 'next/image';

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
        minHeight: { xs: '45vh', sm: '60vh', md: '100vh' },
        position: 'relative',
      }}
    >
      <Image
        priority
        width={'100%'}
        height={'100%'}
        layout="fill"
        objectFit={'cover'}
        src={wall}
        alt="home"
      />
    </Box>
  );
};

export default Room;
