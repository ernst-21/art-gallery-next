import React from 'react';
import PageWidthContainer from '../../../../components/layouts/PageWidthContainer';
import { CartContent } from '../../components/Cart/components/CartContent';

const OrderSummaryContainer = () => {
  return (
    <PageWidthContainer>
      <CartContent />
    </PageWidthContainer>
  );
};

export default OrderSummaryContainer;
