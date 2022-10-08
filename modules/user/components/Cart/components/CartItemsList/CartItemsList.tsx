import React from 'react';
import { Grid } from '@mui/material';
import { IArtwork } from '../../../../../../interfaces';
import CartItem from '../CartItem/CartItem';
import { CartListEmpty } from '../CartListEmpty';
import { CartArtworks } from '../../../../../../types/common.types';

const CartItemsList = ({ cart }: CartArtworks) => {
  if (!cart || !cart.length) {
    return <CartListEmpty />;
  }

  return (
    <Grid
      sx={{ height: cart.length > 4 ? '600px' : null, overflowY: 'auto' }}
      item
      xs={12}
      md={9}
    >
      {cart?.map((item: IArtwork) => (
        <CartItem key={item?._id} artwork={item} />
      ))}
    </Grid>
  );
};

export default CartItemsList;
