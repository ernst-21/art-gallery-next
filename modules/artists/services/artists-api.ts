import { ApiClient } from '../../../api';
import { RequestConfig } from '../../../types/axios';
import { IArtist } from '../../../interfaces';

export const searchArtists = (
  params: any,
  config?: RequestConfig
): Promise<IArtist[]> => {
  return ApiClient.post('/artists', params, config).then((data) => data.data);
};
