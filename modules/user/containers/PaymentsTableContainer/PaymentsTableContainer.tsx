import { Box, Typography } from '@mui/material';
import React from 'react';
import PaymentsTable from '../../components/PaymentsTable/PaymentsTable';

const PaymentsContainer = () => {
  return (
    <Box sx={{ minHeight: 'calc(100vh - 70px)', width: '100%' }}>
      <Typography sx={{ mt: 6, mb: 4 }} variant="h1">
        My payments
      </Typography>
      <PaymentsTable />
    </Box>
  );
};

export default PaymentsContainer;
