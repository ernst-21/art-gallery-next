import React, { memo, useMemo } from 'react';
import ItemCard from '../../../../components/ui/ItemCard/ItemCard';
import { IArtist } from '../../../../interfaces';
import Image from 'next/image';
import CardMedia from '@mui/material/CardMedia';
import { CardContent } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { NextMuiLink } from '../../../../components/ui/Link/NextMuiLink';

const ArtistCard = ({
  name,
  country,
  pic,
  likes,
  discipline,
  identifier,
}: IArtist) => {
  const numberOfLikes = useMemo(() => {
    return likes.length;
  }, [likes.length]);

  return (
    <div>
      <NextMuiLink href={`/artists/${identifier}`}>
        <ItemCard condition={false}>
          <CardMedia
            sx={{
              height: 250,
              width: '100%',
              borderBottom: '1px solid lightgray',
              position: 'relative',
            }}
          >
            <Image
              blurDataURL={pic}
              placeholder={pic ? 'blur' : undefined}
              src={pic}
              layout="fill"
              objectFit="cover"
              alt={name}
            />
          </CardMedia>
          <CardContent>
            <Stack spacing={1}>
              <Typography gutterBottom variant="h6" component="div">
                {name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {discipline.charAt(0).toUpperCase() + discipline.slice(1)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Country: {country}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                likes: {numberOfLikes}
              </Typography>
            </Stack>
          </CardContent>
        </ItemCard>
      </NextMuiLink>
    </div>
  );
};

export default memo(ArtistCard);
