import { Box } from '@mui/material';
import React from 'react';
import PageWidthContainer from '../../../../components/layouts/PageWidthContainer';
import { useCart } from '../../../../context/cart';
import { CartContent } from '../../components/Cart/components/CartContent';

const OrderSummaryContainer = () => {
  const { cart } = useCart();
  return (
    <Box minHeight={'calc(100vh - 70px)'}>
      <PageWidthContainer>
        <CartContent cart={cart} />
      </PageWidthContainer>
    </Box>
  );
};

export default OrderSummaryContainer;
