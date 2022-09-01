import { useRouter } from 'next/router';
import { useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import { IArtistFilter, IArtworksFilter } from '../../interfaces';
import { stringifyQuery } from '../../utils/stringifyQuery';

export const usePushToQuery = (
  key: string,
  filter: IArtistFilter | IArtworksFilter,
  storeData: (key: string, filter: IArtistFilter | IArtworksFilter) => void
) => {
  const { push, pathname } = useRouter();

  useEffect(() => {
    storeData(key as string, filter);
  }, [filter, key, storeData]);

  useEffect(() => {
    isEmpty(filter)
      ? push(`${pathname}`)
      : push(`${pathname}?${stringifyQuery(filter)}`);

    //eslint-disable-next-line
  }, [filter]);

  return {};
};
