import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useLocalStorage } from '../../../hooks/utils/useLocalStorage';
import { IArtistFilter } from '../../../interfaces';

// Data value of the provider context
type ArtistsFilterContextValue = {
  artistsFilter: IArtistFilter;
  setArtistsFilter: Dispatch<SetStateAction<IArtistFilter>>;
};
// default value of the context
const defaultValue: ArtistsFilterContextValue = {
  artistsFilter: {},
  setArtistsFilter: () => {},
};

// create context
const ArtistsFilterContext =
  createContext<ArtistsFilterContextValue>(defaultValue);

// Prop types of Provider component
type ArtistsFilterContextProps = {
  children: any;
};

/**
 * Provider component
 * */

const ArtistsFilterProvider = (props: ArtistsFilterContextProps) => {
  const { storageOrInitialValue, storeData } = useLocalStorage(
    'artistsFilter',
    {}
  );
  const [artistsFilter, setArtistsFilter] = useState(storageOrInitialValue);

  useEffect(() => {
    storeData('artistsFilter', artistsFilter);
  }, [artistsFilter, storeData]);

  return (
    <ArtistsFilterContext.Provider
      //@ts-ignore
      value={{ artistsFilter, setArtistsFilter }}
      {...props}
    />
  );
};

// Default hook to retrieve context data
const useArtistsFilter = () => {
  const context = useContext(ArtistsFilterContext);
  if (context === undefined) {
    throw new Error('You must be inside a context provider'); // also, you can throw an error if it is you need the context
  }
  return context;
};

export { ArtistsFilterProvider, useArtistsFilter };
