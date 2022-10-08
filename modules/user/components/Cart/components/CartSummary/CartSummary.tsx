import React, { useMemo, useState } from 'react';
import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import { useCart } from '../../../../../../context/cart';
import CartItemCount from './CartItemCount';
import { format } from '../../../../../../utils';
import { NextMuiLink } from '../../../../../../components/ui/Link/NextMuiLink';
import { useRouter } from 'next/router';
import { AddressSummary } from '../../../OrderSummary/components/AddressSummary';
import CartSummaryFooter from './CartSummaryFooter';
import { PaymentModal } from '../PaymentModal';
import useToggle from '../../../../../../hooks/utils/useToggle';

const CartSummary = () => {
  const { cart, numberOfItems, total, shippingAddress, clearCart } = useCart();
  const { onOpen, isOpen, onClose } = useToggle();
  const [isPaid, setIsPaid] = useState(false);
  const { asPath } = useRouter();

  const isSummary: boolean = useMemo(() => {
    return asPath === '/auth/order/summary';
  }, [asPath]);

  if (!cart || !cart.length) return null;

  return (
    <Grid sx={{ mt: { xs: 2, md: 0 } }} item xs={12} sm={6} md={3}>
      <Paper sx={{ padding: 2 }} elevation={6}>
        <Stack>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 1.5 }}>
            {isSummary ? 'Order Summary' : 'Cart Summary'}
          </Typography>
          <Divider />
          <Box mt={1} display={'flex'} justifyContent={'space-between'}>
            <Typography sx={{ fontWeight: 500 }}>Number of items: </Typography>
            <Typography>{numberOfItems}</Typography>
          </Box>
        </Stack>
        <CartItemCount cart={cart} />
        <Divider sx={{ mt: 1.5 }} />
        {isSummary && (
          <Box
            mt={1.5}
            sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}
          >
            <NextMuiLink underline="always" href="/checkout/address">
              <Typography sx={{ fontWeight: 700 }}>Edit</Typography>
            </NextMuiLink>
          </Box>
        )}
        {isSummary && <AddressSummary shippingAddress={shippingAddress!} />}
        <Box mt={1.5} display={'flex'} justifyContent={'space-between'}>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Total:{' '}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            {format(total)}
          </Typography>
        </Box>
        <CartSummaryFooter
          isSummary={isSummary}
          onClickPay={onOpen}
          isPaid={isPaid}
        />
      </Paper>
      <PaymentModal
        setIsPaid={setIsPaid}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        cart={cart}
        total={total}
        shippingAddress={shippingAddress!}
        numberOfItems={numberOfItems}
        clearCart={clearCart}
      />
    </Grid>
  );
};

export default CartSummary;
