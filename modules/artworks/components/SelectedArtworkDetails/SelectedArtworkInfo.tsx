import React, { memo, useCallback, useMemo, useState } from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { IArtwork } from '../../../../interfaces';
import UserActionsButtons from '../../../../components/ui/UserActionsButtons/UserActionsButtons';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { SelectedArtworkModal } from './components/SelectedArtworkModal';
import SocialIconsList from '../LivingRoom/components/SocialIconsList/SocialIconsList';

import Link from 'next/link';
import { Link as MuiLink } from '@mui/material';
import { stringWrangler } from '../../../../utils';
import useToggle from '../../../../hooks/utils/useToggle';
import { useUser } from '../../../../hooks/security/useUser';
import { useMutation } from 'react-query';
import { voteArtwork, downVoteArtwork } from '../../services/artworks-api';
import { ArtworkVoteType } from '../../../../types/common.types';
import { SelectedArtworkTags } from './components/SelectedArtworkTags';

type SelectedProps = {
  artwork: IArtwork;
};

const SelectedArtworksInfo = ({ artwork }: SelectedProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { isOpen, onClose, onOpen } = useToggle();
  const { isAuthenticated, user } = useUser();
  const [updatedArtwork, setUpdatedArtwork] = useState(null);
  const { mutate: voteArtworkByClick } = useMutation(
    'artwork-vote',
    (body: ArtworkVoteType) => voteArtwork(body),
    {
      //@ts-ignore
      onSuccess: (data) => setUpdatedArtwork(data),
    }
  );

  const { mutate: downVoteArtworkByClick } = useMutation(
    'artwork-downVote',
    (body: ArtworkVoteType) => downVoteArtwork(body),
    {
      //@ts-ignore
      onSuccess: (data) => setUpdatedArtwork(data),
    }
  );

  const artworkToRender = useMemo(() => {
    return updatedArtwork ? updatedArtwork : artwork;
  }, [artwork, updatedArtwork]);

  const artistIdentifier = useMemo(() => {
    if (artwork) {
      return stringWrangler.joinNames(artwork?.artist, artwork?.artist_Id);
    }
  }, [artwork]);

  const handleOpenModal = useCallback(() => {
    if (artwork) {
      handleOpen();
    }
  }, [artwork]);

  const downVoteOrLogin = () => {
    return !isAuthenticated
      ? onOpen()
      : downVoteArtworkByClick({ artworkId: artwork._id!, userId: user?._id });
  };

  const voteOrLogin = () => {
    return !isAuthenticated
      ? onOpen()
      : voteArtworkByClick({ artworkId: artwork._id!, userId: user?._id });
  };

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
          {artwork.featured && (
            <Typography
              sx={{ textTransform: 'capitalize', color: 'text.secondary' }}
              paragraph
            >
              Featured
            </Typography>
          )}
          <Typography
            sx={{ textTransform: 'capitalize', color: 'text.secondary' }}
            paragraph
          >
            {artwork?.category}
          </Typography>
          {!artwork.featured && (
            <Typography paragraph>${artwork?.price} USD</Typography>
          )}
          <Link href={`/artists/${artistIdentifier}`} passHref>
            <MuiLink sx={{ cursor: 'pointer' }}>
              <Typography paragraph>{artwork?.artist}</Typography>
            </MuiLink>
          </Link>

          <Typography paragraph>Size: {artwork?.size}</Typography>
          <Typography sx={{ mb: 4 }} paragraph>
            Voters: {artworkToRender?.voters?.length}
          </Typography>
          <Typography paragraph>{artwork?.description}</Typography>
          <SelectedArtworkTags artwork={artwork} />
        </Stack>
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
          {!artwork.featured && (
            <UserActionsButtons
              artwork={artworkToRender}
              isOpen={isOpen}
              onClose={onClose}
              onOpen={onOpen}
              downVoteOrLogin={downVoteOrLogin}
              voteOrLogin={voteOrLogin}
              isLoading={false}
            />
          )}

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
