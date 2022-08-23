import React, { useMemo, memo } from 'react';
import { CardContent, Stack } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import UserActionsButtons from '../../../../components/ui/UserActionsButtons/UserActionsButtons';
import { IArtwork } from '../../../../interfaces';

const ArtworkCardContent = ({
  featured,
  price,
  gallery,
  category,
  name,
  artist,
  voters,
  ...data
}: IArtwork) => {
  const likes = useMemo(() => {
    return voters?.length;
  }, [voters]);

  return (
    <>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Typography>
          {featured && (
            <Typography variant="body2" color="text.secondary">
              Right now in {gallery} gallery
            </Typography>
          )}
          {!featured && (
            <>
              <Typography variant="body2" color="text.secondary">
                {artist}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Likes: {likes}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gallery: {gallery}
              </Typography>
            </>
          )}
        </Stack>
      </CardContent>

      {!featured && (
        <CardActions>
          {/*@ts-ignore*/}
          <UserActionsButtons artwork={data} />
        </CardActions>
      )}
    </>
  );
};

export default memo(ArtworkCardContent);
