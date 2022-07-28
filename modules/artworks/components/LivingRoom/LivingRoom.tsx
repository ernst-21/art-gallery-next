import { memo } from 'react';
import { Box, Button, Stack } from '@mui/material';
import Room from './components/Room';
import SimilarArtworks from '../SimilarArtworks';
import { useTranslation } from 'next-i18next';

type LivingRoomProps = {
  onOpen: () => void;
};

const LivingRoom = ({ onOpen }: LivingRoomProps) => {
  const { t } = useTranslation('common');
  return (
    <Stack sx={{ display: 'flex', width: '100%' }}>
      <Room />
      <Box
        display={{ xs: 'flex', md: 'none' }}
        justifyContent="center"
        sx={{ w: '100%', padding: 2 }}
      >
        <Button variant="text" onClick={onOpen}>
          {t('tryOtherArtworks')}
        </Button>
      </Box>
      <SimilarArtworks />
    </Stack>
  );
};

export default memo(LivingRoom);
