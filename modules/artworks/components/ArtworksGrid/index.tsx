import React, { memo } from 'react';
import { Grid, GridProps } from '@mui/material';
import { IArtwork } from '../../../../interfaces';
import ArtworkCard from '../ArtworkCard';

type ArtworksGridProps = {
  data: IArtwork[];
};

const ArtworksGrid = ({
  data,
  spacing,
  ...props
}: ArtworksGridProps & GridProps) => {
  return (
    <Grid
      sx={{ width: '100%', flexGrow: 1 }}
      spacing={spacing}
      container
      display={'flex'}
      justifyContent="center"
    >
      {data?.map((item: IArtwork) => (
        <Grid key={item.name} {...props} item>
          <ArtworkCard artwork={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(ArtworksGrid);
