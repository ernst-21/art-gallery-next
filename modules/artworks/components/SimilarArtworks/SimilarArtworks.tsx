import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { ArtworkType } from '../../../../types/common.types';
import ArtworksContainer from '../../containers/ArtworksContainer';
import { searchArtworks } from '../../services/artworks-api';

type SimilarArtworks = {
  tags: string[];
  artworkId: string | undefined;
};

const SimilarArtworks = ({ artwork }: ArtworkType) => {
  const { mutateAsync: findSimilar, data } = useMutation(
    'artwork-detail',
    (filter: SimilarArtworks) => searchArtworks(filter)
  );

  useEffect(() => {
    if (artwork) {
      findSimilar({ tags: artwork.tags, artworkId: artwork._id });
    }
  }, [artwork, findSimilar]);

  return <ArtworksContainer artworks={data!} title={'Similar Artworks'} />;
};

export default SimilarArtworks;
