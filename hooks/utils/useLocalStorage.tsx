import { useCallback, useMemo } from 'react';

export const useLocalStorage = (key: string, initialValue: any) => {
  const dataFromStorage = useMemo(() => {
    return window.localStorage.getItem(key);
  }, [key]);

  const storageOrInitialValue = dataFromStorage
    ? JSON.parse(dataFromStorage)
    : initialValue;

  const storeData = useCallback((key: string, updateValue: any) => {
    window.localStorage.setItem(key, JSON.stringify(updateValue));
  }, []);

  return {
    dataFromStorage,
    storageOrInitialValue,
    storeData,
  };
};
