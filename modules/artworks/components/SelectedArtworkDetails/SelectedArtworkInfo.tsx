import React, { memo, useCallback } from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { IArtwork } from '../../../../interfaces';
import UserActionsButtons from '../../../../components/ui/UserActionsButtons/UserActionsButtons';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { SelectedArtworkModal } from './components/SelectedArtworkModal';
import SocialIconsList from '../LivingRoom/components/SocialIconsList/SocialIconsList';

type SelectedProps = {
  artwork: IArtwork;
};

const SelectedArtworksInfo = ({ artwork }: SelectedProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenModal = useCallback(() => {
    if (artwork) {
      handleOpen();
    }
  }, [artwork]);

  return (
    <>
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          ml: { xs: 0, md: 4 },
          mt: { xs: 2, md: 0 },
        }}
      >
        <Stack sx={{ paddingX: 2 }}>
          <Typography sx={{ mb: 2 }} variant="h1">
            {artwork?.name}
          </Typography>
          <Typography
            sx={{ textTransform: 'capitalize', color: 'text.secondary' }}
            paragraph
          >
            {artwork?.category}
          </Typography>
          <Typography paragraph>${artwork?.price} USD</Typography>
          <Typography paragraph>{artwork?.artist}</Typography>
          <Typography paragraph>Size: {artwork?.size}</Typography>
          <Typography sx={{ mb: 4 }} paragraph>
            Voters: {artwork?.voters?.length}
          </Typography>
          <Typography paragraph>{artwork?.description}</Typography>
        </Stack>
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
          <UserActionsButtons artwork={artwork} />
          {artwork.category !== 'sculpture' && (
            <IconButton onClick={handleOpenModal}>
              <RemoveRedEyeOutlinedIcon />
            </IconButton>
          )}
        </Box>
        <Box sx={{ maxWidth: 200, mt: 1 }}>
          <SocialIconsList url={artwork?.url} />
        </Box>
      </Box>
      <SelectedArtworkModal
        handleOpen={handleOpenModal}
        handleClose={handleClose}
        open={open}
        artwork={artwork}
      />
    </>
  );
};

export default memo(SelectedArtworksInfo);
