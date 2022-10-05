import React, { useCallback, useMemo, useState } from 'react';
import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import { useCart } from '../../../../../../context/cart';
import CartItemCount from './CartItemCount';
import { format } from '../../../../../../utils';
import { NextMuiLink } from '../../../../../../components/ui/Link/NextMuiLink';
import { useRouter } from 'next/router';
import { AddressSummary } from '../../../OrderSummary/components/AddressSummary';
import CartSummaryFooter from './CartSummaryFooter';
import { useMutation } from 'react-query';
import { useUser } from '../../../../../../hooks/security/useUser';
import { IArtwork, IOrder } from '../../../../../../interfaces';
import { createOrderFromSummary } from '../../../../services/user-api';

const CartSummary = () => {
  const { cart, numberOfItems, total, shippingAddress } = useCart();
  const { user } = useUser();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const { asPath } = useRouter();
  const {
    mutateAsync: createOrderMutation,
    data,
    isLoading,
    isError,
  } = useMutation(
    ['payment', user?._id],
    (order: IOrder) => createOrderFromSummary(order),
    {
      onSuccess: () => setIsConfirmed(true),
    }
  );

  const orderItems = useMemo(() => {
    return cart.map((item: IArtwork) => {
      return {
        _id: item._id!,
        name: item.name!,
        artist: item.artist!,
        description: item.description!,
        slug: item.slug!,
        category: item.category!,
        image: item.url!,
        price: item.price!,
        size: item.size!,
      };
    });
  }, [cart]);

  const isSummary = useMemo(() => {
    return asPath === '/order/summary';
  }, [asPath]);

  const handleCreateOrder = useCallback(async () => {
    const order = {
      numberOfItems,
      userId: user?._id!,
      shippingAddress: shippingAddress!,
      total,
      orderItems,
      isPaid: false,
      paidAt: '',
    };
    //@ts-ignore
    createOrderMutation(order);
  }, [
    createOrderMutation,
    numberOfItems,
    orderItems,
    shippingAddress,
    total,
    user?._id,
  ]);

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
        {isSummary && !isConfirmed && (
          <Box
            mt={1.5}
            sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}
          >
            <NextMuiLink underline="always" href="/checkout/address">
              <Typography sx={{ fontWeight: 700 }}>Edit</Typography>
            </NextMuiLink>
          </Box>
        )}
        {isSummary && <AddressSummary />}
        <Box mt={1.5} display={'flex'} justifyContent={'space-between'}>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Total:{' '}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            {format(total)}
          </Typography>
        </Box>
        <CartSummaryFooter
          isLoading={isLoading}
          isSummary={isSummary}
          onClick={handleCreateOrder}
          onClickPay={() => setIsPaid(true)}
          isConfirmed={isConfirmed}
          isPaid={isPaid}
        />
      </Paper>
    </Grid>
  );
};

export default CartSummary;
