import React, { memo } from 'react';
import { Divider, Grid, Stack, Typography } from '@mui/material';
import { ArtworkType } from '../../../../../../types/common.types';
import Image from 'next/image';
import { stringWrangler } from '../../../../../../utils';
import { NextMuiLink } from '../../../../../../components/ui/Link/NextMuiLink';
import { format } from '../../../../../../utils';

const CartItem = ({ artwork }: ArtworkType) => {
  return (
    <NextMuiLink href={`/artworks/${artwork.slug}`}>
      <Grid sx={{ paddingY: 2, display: 'flex' }} container>
        <Grid sx={{ position: 'relative', mr: 3 }} item xs={12} sm={2} md={1}>
          <Image
            src={artwork.url}
            layout="intrinsic"
            height={120}
            width={100}
            objectFit="cover"
            alt={artwork.name}
          />
        </Grid>
        <Grid item xs={12} sm={7} md={8.5}>
          <Stack>
            <Typography variant="h2">{artwork.name}</Typography>
            <Typography>
              {stringWrangler.capitalizeString(artwork.category)}
            </Typography>
            <Typography>{artwork.artist}</Typography>
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
          </Stack>
        </Grid>
      </Grid>
      <Divider />
    </NextMuiLink>
  );
};

export default memo(CartItem);
