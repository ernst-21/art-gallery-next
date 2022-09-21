import { ApiClient } from '../../../api';
import { RequestConfig } from '../../../types/axios';
import { IArtist, IArtwork } from '../../../interfaces';
import { handleResponse } from '../../../utils/response';
import { ArtistVoteType } from '../../../types/common.types';

export const searchArtistsByFilter = (
  //params: any,
  config?: RequestConfig
): Promise<IArtist[]> => {
  return ApiClient.post('/artists', config).then((data) => data.data);
};

export const getAllArtists = (config?: RequestConfig): Promise<IArtist[]> => {
  return handleResponse(ApiClient.get('/artists'));
};

export const getArtistArtworks = (
  //params: any,
  config?: RequestConfig
): Promise<IArtwork[]> => {
  return ApiClient.post('/artworks/artist-work', config).then(
    (data) => data.data
  );
};

export const voteArtist = (
  //params: any,
  config?: ArtistVoteType & RequestConfig
): Promise<IArtist[]> => {
  return ApiClient.post('/artists/vote', config).then((data) => data.data);
};

export const downVoteArtist = (
  //params: any,
  config?: ArtistVoteType & RequestConfig
): Promise<IArtist[]> => {
  return ApiClient.post('/artists/downvote', config).then((data) => data.data);
};

export const getFavoriteArtists = (
  //params: any,
  config?: Partial<ArtistVoteType> & RequestConfig
): Promise<IArtist[]> => {
  return ApiClient.post('/artists/favorite', config).then((data) => data.data);
};
