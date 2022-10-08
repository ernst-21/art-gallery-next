import React, { memo, useMemo } from 'react';
import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import { IPayment } from '../../../../interfaces';
import { format } from '../../../../utils';
import { AddressSummary } from '../OrderSummary/components/AddressSummary';
import { AddressInfo } from '../OrderSummary/components/AddressSummary/AddressSummary';
import moment from 'moment';

const PaymentSummaryCard = ({
  total,
  numberOfItems,
  shippingAddress,
  createdAt,
}: Partial<IPayment>) => {
  const paymentDate = useMemo(() => {
    return moment(new Date(createdAt!)).format('MMM Do YY  (HH:mm:ss)');
  }, [createdAt]);

  return (
    <Grid sx={{ mt: { xs: 2, md: 0 } }} item xs={12} sm={6} md={3}>
      <Paper sx={{ padding: 2 }} elevation={6}>
        <Stack>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 1.5 }}>
            Payment Summary
          </Typography>
          <Divider />
          <Box mt={1} display={'flex'} justifyContent={'space-between'}>
            <Typography sx={{ fontWeight: 500 }}>Number of items: </Typography>
            <Typography>{numberOfItems}</Typography>
          </Box>
          <AddressInfo info={paymentDate} label="Paid at" />
        </Stack>
        <Divider sx={{ mt: 1.5 }} />
        <AddressSummary shippingAddress={shippingAddress!} />
        <Box mt={1.5} display={'flex'} justifyContent={'space-between'}>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Total:{' '}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            {format(total!)}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default memo(PaymentSummaryCard);
