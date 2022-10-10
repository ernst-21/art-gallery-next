import React, { memo, useCallback, useContext, useMemo } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { IArtwork } from '../../../interfaces';
import { useUserInfo } from '../../../hooks/artworks/useUserInfo';
import { Box, IconButton, Typography } from '@mui/material';
import LoginMessageModal from '../LoginMessageModal/LoginMessageModal';
import { CartContext } from '../../../context/cart';
import { useUser } from '../../../hooks/security/useUser';

type Props = {
  artwork: IArtwork;
  voteOrLogin?: () => void;
  downVoteOrLogin?: () => void;
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
  const { hasAddedToCart, hasVoted, isAuthenticated } = useUserInfo(artwork);
  const { user } = useUser();
  const { addArtworkToCart, removeArtworkFromCart } = useContext(CartContext);

  const addToCartOrLogin = useCallback(() => {
    return !isAuthenticated ? onOpen() : addArtworkToCart(artwork);
  }, [addArtworkToCart, artwork, isAuthenticated, onOpen]);

  const isPurchased = useMemo(() => {
    if (user) {
      return artwork.purchased.includes(user?._id);
    } else {
      return false;
    }
  }, [artwork.purchased, user]);

  if (isPurchased)
    return <Typography sx={{ fontStyle: 'italic' }}>Purchased</Typography>;

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

      {hasAddedToCart ? (
        <IconButton
          onClick={() => removeArtworkFromCart(artwork)}
          aria-label="add to cart"
        >
          <RemoveShoppingCartIcon />
        </IconButton>
      ) : (
        <IconButton onClick={addToCartOrLogin} aria-label="remove from cart">
          <AddShoppingCartOutlinedIcon />
        </IconButton>
      )}
      <LoginMessageModal
        open={isOpen}
        handleClose={onClose}
        handleOpen={onOpen}
      />
    </Box>
  );
};

export default memo(UserActionsButtons);
