import React, { memo, useMemo } from 'react';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Box, IconButton } from '@mui/material';
import { ArtistType } from '../../../../types/common.types';
import { ArtistsSocials } from '../ArtistSocials';
import LoginMessageModal from '../../../../components/ui/LoginMessageModal/LoginMessageModal';
import { CircularProgress } from '@mui/material';

type ComponentProps = {
  artistVoted?: boolean;
  voteOrLogin?: () => void;
  downVoteOrLogin?: () => void;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  isLoading: boolean;
};

const ArtistShareButtons = ({
  artist,
  artistVoted,
  voteOrLogin,
  downVoteOrLogin,
  isOpen,
  onClose,
  isLoading,
  onOpen,
}: ArtistType & ComponentProps) => {
  return (
    <Box display={'flex'} sx={{ alignItems: 'center' }}>
      <Box>
        {isLoading ? (
          <IconButton>
            <CircularProgress color="inherit" size={20} />
          </IconButton>
        ) : artistVoted ? (
          <IconButton onClick={downVoteOrLogin}>
            <FavoriteOutlinedIcon sx={{ color: '#ff0000bf' }} />
          </IconButton>
        ) : (
          <>
            <IconButton onClick={voteOrLogin}>
              <FavoriteBorderOutlinedIcon />
            </IconButton>

            <LoginMessageModal
              open={isOpen}
              handleClose={onClose}
              handleOpen={onOpen}
            />
          </>
        )}
      </Box>
      <ArtistsSocials artist={artist} />
    </Box>
  );
};

export default memo(ArtistShareButtons);
