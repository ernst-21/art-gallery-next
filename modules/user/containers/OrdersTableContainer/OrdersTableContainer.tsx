import { Box, Typography } from '@mui/material';
import React from 'react';
import { OrdersTable } from '../../components/OrdersTable';

const OrdersTableContainer = () => {
  return (
    <Box sx={{ minHeight: 'calc(100vh - 70px)', width: '100%' }}>
      <Typography sx={{ mt: 6 }} variant="h1">
        My Orders
      </Typography>
      <OrdersTable />
    </Box>
  );
};

export default OrdersTableContainer;
