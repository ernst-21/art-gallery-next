import { AxiosResponse } from 'axios';

export const handleResponse = (promise: Promise<AxiosResponse>) => {
  return promise.then(({ data }) => data);
};