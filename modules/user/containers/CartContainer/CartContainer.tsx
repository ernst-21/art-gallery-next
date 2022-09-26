import { Grid, Stack } from '@mui/material';
import React from 'react';
import PageWidthContainer from '../../../../components/layouts/PageWidthContainer';
import { CartContent } from '../../components/Cart/components/CartContent';
import { CartSuggestions } from '../../components/Cart/components/CartSuggestions';

const CartContainer = () => {
  return (
    <Stack>
      <PageWidthContainer>
        <CartContent />
      </PageWidthContainer>
      <CartSuggestions />
    </Stack>
  );
};

export default CartContainer;
