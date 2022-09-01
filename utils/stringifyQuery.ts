import qs from 'qs';

export const stringifyQuery = (state: any) => {
  return qs.stringify(state, { indices: false });
};
