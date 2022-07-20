import React, { useMemo, memo } from 'react';
import { CardContent, Stack } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type ArtworkContentProps = {
  featured: boolean;
  price: number;
  gallery: string;
  category: string;
  name: string;
  artist: string;
  voters: string[];
};

const ArtworkCardContent = ({
  featured,
  price,
  gallery,
  category,
  name,
  artist,
  voters,
}: ArtworkContentProps) => {
  const likes = useMemo(() => {
    return voters.length;
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
                likes: {likes}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                price: ${price}
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
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      )}
    </>
  );
};

export default memo(ArtworkCardContent);
