import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useLocalStorage } from '../../../hooks/utils/useLocalStorage';
import { IArtworksFilter } from '../../../interfaces';

// Data value of the provider context
type ArtworksFilterContextValue = {
  artworksFilter: IArtworksFilter;
  setArtworksFilter: Dispatch<SetStateAction<IArtworksFilter>>;
};
// default value of the context
const defaultValue: ArtworksFilterContextValue = {
  artworksFilter: {},
  setArtworksFilter: () => {},
};

// create context
const ArtworksFilterContext =
  createContext<ArtworksFilterContextValue>(defaultValue);

// Prop types of Provider component
type ArtworksFilterContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const ArtworksFilterProvider = (props: ArtworksFilterContextProps) => {
  const { storageOrInitialValue, storeData } = useLocalStorage(
    'artworksFilter',
    {}
  );
  const [artworksFilter, setArtworksFilter] = useState(storageOrInitialValue);

  useEffect(() => {
    storeData('artworksFilter', artworksFilter);
  }, [artworksFilter, storeData]);

  return (
    <ArtworksFilterContext.Provider
      //@ts-ignore
      value={{ artworksFilter, setArtworksFilter }}
      {...props}
    />
  );
};

// Default hook to retrieve context data
const useArtworksFilter = () => {
  const context = useContext(ArtworksFilterContext);
  if (context === undefined) {
    throw new Error('You must be inside a context provider'); // also, you can throw an error if it is you need the context
  }
  return context;
};

export { ArtworksFilterProvider, useArtworksFilter };
