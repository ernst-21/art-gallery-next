import { ApiClient } from '../../../api';
import { RequestConfig } from '../../../types/axios';
import { handleResponse } from '../../../utils/response';
import { IArtwork } from '../../../interfaces';

export const testApi = (config?: RequestConfig) => {
  return handleResponse(ApiClient.get('/hello', config));
};

export const searchByCategory = (
  params: any,
  config?: RequestConfig
): Promise<IArtwork[]> => {
  return ApiClient.post('/artworks/living-room', params, config);
};

export const searchArtworks = (
  params: any,
  config?: RequestConfig
): Promise<IArtwork[]> => {
  return ApiClient.post('/artworks', params, config).then((data) => data.data);
};

export const getArtists = () => {
  return handleResponse(ApiClient.get(`/artists`));
};
