import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';
import { IArtwork } from '../../../../interfaces';
import ArtworkCardContent from '../CardContent/CardContent';
import ItemCard from '../../../../components/ui/ItemCard/ItemCard';
import { NextMuiLink } from '../../../../components/ui/Link/NextMuiLink';
import { useMemo } from 'react';

type HomeCardProps = {
  sx?: {};
};

const ArtworkCard = ({
  url,
  name,
  artist,
  featured,
  size,
  sx,
  ...data
}: IArtwork & HomeCardProps) => {
  const height = useMemo(() => {
    if (featured) return 250;
    if (size === 'big') return 450;
    if (size === 'medium') return 350;
    return 200;
  }, [featured, size]);

  return (
    <div>
      <NextMuiLink href={'/'}>
        <ItemCard condition={featured}>
          <CardMedia
            sx={{
              width: '100%',
              minHeight: height,
              borderBottom: '1px solid lightgray',
              position: 'relative',
              ...sx,
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
            size={size}
            {...data}
          />
        </ItemCard>
      </NextMuiLink>
    </div>
  );
};

export default React.memo(ArtworkCard);
