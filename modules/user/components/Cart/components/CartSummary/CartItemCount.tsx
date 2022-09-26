import { Box, Stack, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { IArtwork } from '../../../../../../interfaces';

type CategoryCount = {
  categoryCount: number;
  category: 'Paintings' | 'Sculptures' | 'Prints' | 'Photos';
};

export const CategoryCount = ({ categoryCount, category }: CategoryCount) => {
  return categoryCount > 0 ? (
    <Box mt={1} display={'flex'} justifyContent={'space-between'}>
      <Typography sx={{ fontWeight: 500 }}>{category}: </Typography>
      <Typography>{categoryCount}</Typography>
    </Box>
  ) : (
    <></>
  );
};

type CartPropsType = {
  cart: IArtwork[];
};

const CartItemCount = ({ cart }: CartPropsType) => {
  const paintings = useMemo(() => {
    return cart.filter((item: IArtwork) => item.category === 'painting').length;
  }, [cart]);

  const sculptures = useMemo(() => {
    return cart.filter((item: IArtwork) => item.category === 'sculpture')
      .length;
  }, [cart]);

  const prints = useMemo(() => {
    return cart.filter((item: IArtwork) => item.category === 'print').length;
  }, [cart]);

  const photos = useMemo(() => {
    return cart.filter((item: IArtwork) => item.category === 'photography')
      .length;
  }, [cart]);

  return (
    <Stack>
      <CategoryCount categoryCount={paintings} category={'Paintings'} />
      <CategoryCount categoryCount={sculptures} category={'Sculptures'} />
      <CategoryCount categoryCount={prints} category={'Prints'} />
      <CategoryCount categoryCount={photos} category={'Photos'} />
    </Stack>
  );
};

export default CartItemCount;
