import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { IArtwork } from '../../../../interfaces';
import { SeedArtwork } from '../../../../database/seed-data';
import ArtworkCardContent from '../CardContent/CardContent';
import ItemCard from '../../../../components/ui/ItemCard/ItemCard';

const ArtworkCard = ({
  url,
  name,
  artist,
  featured,
  ...data
}: IArtwork & SeedArtwork) => {
  return (
    <ItemCard condition={featured}>
      <CardMedia
        sx={{
          height: 250,
          width: '100%',
          borderBottom: '1px solid lightgray',
          position: 'relative',
        }}
      >
        <Image
          blurDataURL={url}
          placeholder={url ? 'blur' : undefined}
          src={url}
          layout="fill"
          objectFit="cover"
          alt={name}
        />
      </CardMedia>
      <ArtworkCardContent
        name={name}
        artist={artist}
        featured={featured}
        {...data}
      />
    </ItemCard>
  );
};

export default React.memo(ArtworkCard);
