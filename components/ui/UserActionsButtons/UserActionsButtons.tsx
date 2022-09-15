import React, { memo, SyntheticEvent } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { IArtwork } from '../../../interfaces';
import { useUserInfo } from '../../../hooks/artworks/useUserInfo';
import { Box, IconButton } from '@mui/material';
import LoginMessageModal from '../LoginMessageModal/LoginMessageModal';

type Props = {
  artwork: IArtwork;
  voteOrLogin?: (e: SyntheticEvent) => void;
  downVoteOrLogin?: (e: SyntheticEvent) => void;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  isLoading: boolean;
};

const UserActionsButtons = ({
  artwork,
  isOpen,
  onClose,
  onOpen,
  downVoteOrLogin,
  voteOrLogin,
}: Props) => {
  const { hasAddedToCart, hasVoted } = useUserInfo(artwork);
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {hasVoted ? (
        <IconButton
          onClick={downVoteOrLogin}
          sx={{ mr: 1 }}
          aria-label="favorite"
        >
          <FavoriteIcon sx={{ color: '#ff0000bf' }} />
        </IconButton>
      ) : (
        <IconButton onClick={voteOrLogin} sx={{ mr: 1 }} aria-label="favorite">
          <FavoriteBorderOutlinedIcon />
        </IconButton>
      )}

      <IconButton aria-label="add to cart">
        {hasAddedToCart ? (
          <RemoveShoppingCartIcon />
        ) : (
          <AddShoppingCartOutlinedIcon />
        )}
      </IconButton>
      <LoginMessageModal
        open={isOpen}
        handleClose={onClose}
        handleOpen={onOpen}
      />
    </Box>
  );
};

export default memo(UserActionsButtons);
