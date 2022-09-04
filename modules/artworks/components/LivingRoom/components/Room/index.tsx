import React from 'react';
import { Box } from '@mui/material';
import wall from '../../../../../../public/images/living-room/wall.jpg';
import Image from 'next/image';
import SelectedArtwork from '../SelectedArtwork';
import { ArtworkType } from '../../../../../../types/common.types';

const styles = {
  boxContainer: {
    backgroundImage: `url(${wall})`,
  },
};

const Room = ({ artwork }: ArtworkType) => {
  return (
    <Box
      style={styles.boxContainer}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        height: '100%',
        width: '100%',
        position: 'relative',
      }}
    >
      <SelectedArtwork artwork={artwork} />
      <Image priority layout="fill" objectFit={'cover'} src={wall} alt="home" />
    </Box>
  );
};

export default Room;
