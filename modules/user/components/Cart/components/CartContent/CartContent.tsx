import { Grid } from '@mui/material';
import React from 'react';
import { CartItemsList } from '../CartItemsList';
import { CartSummary } from '../CartSummary';

const CartContent = () => {
  return (
    <Grid sx={{ my: 6 }} container columnSpacing={4}>
      <CartItemsList />
      <CartSummary />
    </Grid>
  );
};

export default CartContent;
