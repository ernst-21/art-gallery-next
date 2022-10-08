import { Grid } from '@mui/material';
import React from 'react';
import { CartArtworks } from '../../../../../../types/common.types';
import { PaymentSummaryCard } from '../../../PaymentSummaryCard';
import { CartItemsList } from '../CartItemsList';
import { CartSummary } from '../CartSummary';

type CartContentProps = {
  isPaymentSummary?: boolean;
};

const CartContent = ({
  cart,
  isPaymentSummary = false,
  ...rest
}: CartArtworks & CartContentProps) => {
  return (
    <Grid sx={{ my: 6 }} container columnSpacing={4}>
      <CartItemsList cart={cart} />
      {isPaymentSummary ? <PaymentSummaryCard {...rest} /> : <CartSummary />}
    </Grid>
  );
};

export default CartContent;
