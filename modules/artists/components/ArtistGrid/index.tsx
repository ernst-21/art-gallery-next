import React, { memo } from 'react';
import { Grid, GridProps } from '@mui/material';
import { IArtist } from '../../../../interfaces';
import ArtistCard from '../ArtistCard';

type ArtistGridProps = {
  data: IArtist[];
};

const ArtworksGrid = ({
  data,
  spacing,
  ...props
}: ArtistGridProps & GridProps) => {
  return (
    <Grid spacing={spacing} container display={'flex'}>
      {data?.map((item: IArtist) => (
        <Grid key={item.name} {...props} item>
          <ArtistCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(ArtworksGrid);
