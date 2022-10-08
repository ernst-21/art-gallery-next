import { Grid, Stack } from '@mui/material';
import React from 'react';
import PageWidthContainer from '../../../../components/layouts/PageWidthContainer';
import { CartArtworks } from '../../../../types/common.types';
import { CartContent } from '../../components/Cart/components/CartContent';
import { CartSuggestions } from '../../components/Cart/components/CartSuggestions';

const CartContainer = ({ cart }: CartArtworks) => {
  return (
    <Stack>
      <PageWidthContainer>
        <CartContent cart={cart} />
      </PageWidthContainer>
      <CartSuggestions />
    </Stack>
  );
};

export default CartContainer;
