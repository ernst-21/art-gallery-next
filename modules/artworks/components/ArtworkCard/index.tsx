import * as React from 'react';
import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';
import { IArtwork } from '../../../../interfaces';
import ArtworkCardContent from '../CardContent/CardContent';
import ItemCard from '../../../../components/ui/ItemCard/ItemCard';
import { Box } from '@mui/material';

type HomeCardProps = {
  sx?: {};
  artwork: IArtwork;
};

const ArtworkCard = ({ artwork, sx }: HomeCardProps) => {
  const { push } = useRouter();
  const [isCardVisible, setIsCardVisible] = useState(true);

  const height = useMemo(() => {
    if (artwork?.featured) return 250;
    if (artwork?.size === 'big') return 450;
    if (artwork?.size === 'medium') return 350;
    return 200;
  }, [artwork?.featured, artwork?.size]);

  const handleNavigateToAuthor = useCallback(() => {
    push(`/artworks/${artwork.slug}`);
  }, [artwork.slug, push]);

  const src = artwork?.url;

  if (!isCardVisible) {
    return null;
  }

  return (
    <div>
      <ItemCard condition={artwork?.featured}>
        <Box onClick={handleNavigateToAuthor}>
          <CardMedia
            sx={{
              cursor: 'pointer',
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
        </Box>

        <ArtworkCardContent
          removeFromFavorites={() => setIsCardVisible(false)}
          artwork={artwork}
        />
      </ItemCard>
    </div>
  );
};

export default React.memo(ArtworkCard);
