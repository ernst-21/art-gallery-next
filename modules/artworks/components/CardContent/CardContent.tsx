import React, { useMemo, memo } from 'react';
import { CardContent, Stack } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import UserActionsButtons from '../../../../components/ui/UserActionsButtons/UserActionsButtons';
import { IArtwork } from '../../../../interfaces';
import { stringWrangler } from '../../../../utils';
import Link from 'next/link';
import { Link as MuiLink } from '@mui/material';

type CardContentProps = {
  artwork: IArtwork;
};

const ArtworkCardContent = ({ artwork }: CardContentProps) => {
  const likes = useMemo(() => {
    return artwork?.voters?.length;
  }, [artwork?.voters]);

  const artistIdentifier = useMemo(() => {
    if (artwork && !artwork.featured) {
      return stringWrangler.joinNames(artwork?.artist, artwork?.artist_Id);
    } else return '';
  }, [artwork]);

  return (
    <>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h6" component="h1">
            {artwork?.name}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {artwork?.category.charAt(0).toUpperCase() +
              artwork?.category.slice(1)}
          </Typography>
          {artwork?.featured && (
            <Typography variant="body2" color="text.secondary">
              Right now in {artwork?.gallery} gallery
            </Typography>
          )}
          {!artwork?.featured && (
            <>
              <Link href={`/artists/${artistIdentifier}`} passHref>
                <MuiLink>
                  <Typography variant="body2" color="text.secondary">
                    {artwork?.artist}
                  </Typography>
                </MuiLink>
              </Link>
              <Typography variant="body2" color="text.secondary">
                Likes: {likes}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${artwork?.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gallery: {artwork?.gallery}
              </Typography>
            </>
          )}
        </Stack>
      </CardContent>

      {!artwork?.featured && (
        <CardActions>
          <UserActionsButtons artwork={artwork} />
        </CardActions>
      )}
    </>
  );
};

export default memo(ArtworkCardContent);
