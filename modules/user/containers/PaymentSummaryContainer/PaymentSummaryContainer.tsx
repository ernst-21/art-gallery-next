import { Box, Grid } from '@mui/material';
import React from 'react';
import PageWidthContainer from '../../../../components/layouts/PageWidthContainer';
import { IPayment } from '../../../../interfaces';
import { CartContent } from '../../components/Cart/components/CartContent';

type ItemProps = {
  payment: IPayment;
};

const PaymentSummaryContainer = ({ payment }: ItemProps) => {
  const { paymentItems } = payment;
  return (
    <Box minHeight={'calc(100vh - 70px)'}>
      <PageWidthContainer>
        <CartContent
          isPaymentSummary
          // @ts-ignore
          cart={paymentItems}
          {...payment}
        />
      </PageWidthContainer>
    </Box>
  );
};

export default PaymentSummaryContainer;
