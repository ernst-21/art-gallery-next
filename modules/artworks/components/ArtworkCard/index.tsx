import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';
import { IArtwork } from '../../../../interfaces';
import { SeedArtwork } from '../../../../database/seed-data';
import ArtworkCardContent from '../CardContent/CardContent';
import ItemCard from '../../../../components/ui/ItemCard/ItemCard';

const ArtworkCard = ({ url, name, artist, featured, ...data }: IArtwork) => {
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
        url={url}
        name={name}
        artist={artist}
        featured={featured}
        {...data}
      />
    </ItemCard>
  );
};

export default React.memo(ArtworkCard);
