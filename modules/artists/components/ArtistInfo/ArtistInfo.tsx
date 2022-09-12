import React, { memo } from 'react';
import { ArtistType } from '../../../../types/common.types';
import { Stack, Typography } from '@mui/material';
import { stringWrangler } from '../../../../utils';
import { ArtistShareButtons } from '../ArtistShareButtons';

const ArtistInfo = ({ artist }: ArtistType) => {
  return (
    <Stack
      spacing={2}
      sx={{
        display: 'flex',
        width: { xs: '100%', md: '50%' },
        paddingX: { xs: 4, md: 0 },
      }}
    >
      <Typography variant="h1">{artist.name}</Typography>
      <Typography sx={{ fontSize: 18, color: 'gray' }}>
        {stringWrangler.capitalizeString(artist.discipline)}
      </Typography>
      <Typography sx={{ fontSize: 18, color: 'gray' }}>
        {artist.country}
      </Typography>
      <Typography>Likes: {artist.likes.length}</Typography>
      <Typography>{artist.about}</Typography>
      <ArtistShareButtons artist={artist} />
    </Stack>
  );
};

export default memo(ArtistInfo);
