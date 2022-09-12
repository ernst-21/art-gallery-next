import { ApiClient } from '../../../api';
import { RequestConfig } from '../../../types/axios';
import { IArtist, IArtwork } from '../../../interfaces';
import { handleResponse } from '../../../utils/response';

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
