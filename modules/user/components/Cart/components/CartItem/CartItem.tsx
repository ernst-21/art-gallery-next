import React, { memo, SyntheticEvent } from 'react';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { ArtworkType } from '../../../../../../types/common.types';
import Image from 'next/image';
import { stringWrangler } from '../../../../../../utils';
import { format } from '../../../../../../utils';
import { useCart } from '../../../../../../context/cart';
import { useRouter } from 'next/router';

const CartItem = ({ artwork }: ArtworkType) => {
  const { removeArtworkFromCart } = useCart();
  const { push } = useRouter();

  const removeItem = (e: SyntheticEvent) => {
    e.stopPropagation();
    removeArtworkFromCart(artwork);
  };

  const navigateTo = (url: string) => {
    push(url);
  };

  return (
    <>
      <Grid sx={{ paddingY: 2, display: 'flex' }} container>
        <Grid
          sx={{ position: 'relative', mr: 3, cursor: 'pointer' }}
          item
          xs={12}
          sm={2}
          md={1}
        >
          <Image
            onClick={() => navigateTo(`/artworks/${artwork.slug}`)}
            src={artwork.url}
            layout="intrinsic"
            height={120}
            width={100}
            objectFit="cover"
            alt={artwork.name}
          />
        </Grid>
        <Grid sx={{ cursor: 'pointer' }} item xs={12} sm={7} md={8.5}>
          <Stack>
            <Box onClick={() => navigateTo(`/artworks/${artwork.slug}`)}>
              <Typography variant="h2">{artwork.name}</Typography>
            </Box>
            <Typography sx={{ mt: 1, color: 'text.secondary' }}>
              {stringWrangler.capitalizeString(artwork.category)}
            </Typography>
            <Box onClick={() => navigateTo(`/artists/${artwork.artist_Id}`)}>
              <Typography
                sx={{
                  color: 'text.secondary',
                  cursor: 'pointer',
                  '&:hover': { color: 'black' },
                }}
              >
                {artwork.artist}
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={2} md={2}>
          <Stack alignItems={'flex-end'}>
            <Typography sx={{ fontWeight: 500 }} variant="h2">
              Price:
            </Typography>
            <Typography sx={{ fontWeight: 500 }} variant="h2">
              {format(artwork.price)}
            </Typography>
            <Button
              sx={{ mt: 2, color: 'orangered' }}
              onClick={removeItem}
              variant="text"
            >
              Remove
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default memo(CartItem);
