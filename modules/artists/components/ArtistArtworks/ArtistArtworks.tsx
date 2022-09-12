import React, { useEffect, memo } from 'react';
import { useMutation } from 'react-query';
import { ArtistType } from '../../../../types/common.types';
import ArtworksContainer from '../../../artworks/containers/ArtworksContainer';
import { getArtistArtworks } from '../../services/artists-api';

const ArtistArtworks = ({ artist }: ArtistType) => {
  const { mutate: findArtistArtworks, data } = useMutation(
    'artist-work',
    (artistId: any) => getArtistArtworks(artistId)
  );

  useEffect(() => {
    if (artist) {
      findArtistArtworks({ artistId: artist._id });
    }
  }, [artist, findArtistArtworks]);

  return <ArtworksContainer artworks={data!} title={'Artworks'} />;
};

export default memo(ArtistArtworks);
