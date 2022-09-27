import React from 'react';
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useCart } from '../../../../../../context/cart';
import CartItemCount from './CartItemCount';
import { format } from '../../../../../../utils';

const CartSummary = () => {
  const { cart, numberOfItems, total } = useCart();

  if (!cart || !cart.length) return null;

  return (
    <Grid sx={{ mt: { xs: 2, md: 0 } }} item xs={12} sm={6} md={3}>
      <Paper sx={{ padding: 2 }} elevation={6}>
        <Stack>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 1.5 }}>
            Cart Summary
          </Typography>
          <Divider />
          <Box mt={1} display={'flex'} justifyContent={'space-between'}>
            <Typography sx={{ fontWeight: 500 }}>Number of items: </Typography>
            <Typography>{numberOfItems}</Typography>
          </Box>
        </Stack>
        <CartItemCount cart={cart} />
        <Divider sx={{ mt: 1.5 }} />
        <Box mt={1.5} display={'flex'} justifyContent={'space-between'}>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Total:{' '}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            {format(total)}
          </Typography>
        </Box>
        <Button sx={{ mt: 3, mb: 1.5 }} fullWidth variant="contained">
          Checkout
        </Button>
      </Paper>
    </Grid>
  );
};

export default CartSummary;
