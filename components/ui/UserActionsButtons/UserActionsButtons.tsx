import React, { memo } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { IArtwork } from '../../../interfaces';
import { useUserInfo } from '../../../hooks/artworks/useUserInfo';
import { Box, IconButton } from '@mui/material';

type Props = {
  artwork: IArtwork;
};

const UserActionsButtons = ({ artwork }: Props) => {
  const { hasAddedToCart, hasVoted } = useUserInfo(artwork);
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton sx={{ mr: 1 }} aria-label="favorite">
        {hasVoted ? (
          <FavoriteIcon sx={{ color: '#ff0000bf' }} />
        ) : (
          <FavoriteBorderOutlinedIcon />
        )}
      </IconButton>
      <IconButton aria-label="add to cart">
        {hasAddedToCart ? (
          <RemoveShoppingCartIcon />
        ) : (
          <AddShoppingCartOutlinedIcon />
        )}
      </IconButton>
    </Box>
  );
};

export default memo(UserActionsButtons);
