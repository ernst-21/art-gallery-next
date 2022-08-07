import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { IArtistFilter } from '../../../interfaces';
import { artistFiltersDefaults } from '../../../modules/artists/constants/filters';

// Data value of the provider context
type ArtistsFilterContextValue = {
  artistsFilter?: IArtistFilter;
  setArtistsFilter?: Dispatch<SetStateAction<IArtistFilter>>;
};
// default value of the context
const defaultValue: ArtistsFilterContextValue = {
  artistsFilter: artistFiltersDefaults,
};

// create context
const ArtistsFilterContext =
  createContext<ArtistsFilterContextValue>(defaultValue);

// Proptypes of Provider component
type ArtistsFilterContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const ArtistsFilterProvider = (props: ArtistsFilterContextProps) => {
  const [artistsFilter, setArtistsFilter] = useState(artistFiltersDefaults);

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
