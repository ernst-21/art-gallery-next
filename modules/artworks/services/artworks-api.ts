import { ApiClient } from '../../../api';
import { RequestConfig } from '../../../types/axios';
import { handleResponse } from '../../../utils/response';
import { IArtwork } from '../../../interfaces';
import { ArtworkVoteType } from '../../../types/common.types';

export const testApi = (config?: RequestConfig) => {
  return handleResponse(ApiClient.get('/hello', config));
};

export const searchArtworks = (
  params: any,
  config?: RequestConfig
): Promise<IArtwork[]> => {
  return ApiClient.post('/artworks/:slug', params, config).then(
    (data) => data.data
  );
};

export const getArtists = () => {
  return handleResponse(ApiClient.get(`/artists`));
};

export const voteArtwork = (
  params: ArtworkVoteType,
  config?: RequestConfig
): Promise<IArtwork[]> => {
  return ApiClient.post('/artworks/vote', params, config).then(
    (data) => data.data
  );
};

export const downVoteArtwork = (
  params: ArtworkVoteType,
  config?: RequestConfig
): Promise<IArtwork[]> => {
  return ApiClient.post('/artworks/downvote', params, config).then(
    (data) => data.data
  );
};
