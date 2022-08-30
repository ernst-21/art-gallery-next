import { useMemo } from 'react';

export const useInitialValue = (
  filter: any,
  name: string,
  defaultValue: any
) => {
  const initialValue = useMemo(() => {
    //@ts-ignore
    return filter[name] ? filter[name] : defaultValue;
  }, [filter, name, defaultValue]);

  return { initialValue };
};
