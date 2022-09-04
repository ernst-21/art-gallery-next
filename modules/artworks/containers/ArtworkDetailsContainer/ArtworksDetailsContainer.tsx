import React from 'react';
import { ArtworkType } from '../../../../types/common.types';
import { SelectedArtworkDetails } from '../../components/SelectedArtworkDetails';
import { SimilarArtworks } from '../../components/SimilarArtworks';

const ArtworksDetailsContainer = ({ artwork }: ArtworkType) => {
  return (
    <>
      <SelectedArtworkDetails artwork={artwork} />
      <SimilarArtworks artwork={artwork} />
    </>
  );
};

export default ArtworksDetailsContainer;
