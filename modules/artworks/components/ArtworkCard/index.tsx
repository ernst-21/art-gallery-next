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
  artwork: IArtwork;
};

const ArtworkCard = ({ artwork, sx }: HomeCardProps) => {
  const height = useMemo(() => {
    if (artwork?.featured) return 250;
    if (artwork?.size === 'big') return 450;
    if (artwork?.size === 'medium') return 350;
    return 200;
  }, [artwork?.featured, artwork?.size]);

  const src = artwork?.url;

  return (
    <div>
      <NextMuiLink href={'/'}>
        <ItemCard condition={artwork?.featured}>
          <CardMedia
            sx={{
              width: '100%',
              minHeight: height,
              borderBottom: '1px solid lightgray',
              position: 'relative',
              ...sx,
            }}
          >
            {src && (
              <Image
                blurDataURL={artwork?.url}
                placeholder={artwork?.url ? 'blur' : undefined}
                src={src}
                layout="fill"
                objectFit="cover"
                alt={artwork?.name}
              />
            )}
          </CardMedia>
          <ArtworkCardContent artwork={artwork} />
        </ItemCard>
      </NextMuiLink>
    </div>
  );
};

export default React.memo(ArtworkCard);
