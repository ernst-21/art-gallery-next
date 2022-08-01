import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { IArtwork } from '../../../interfaces';

// Data value of the provider context
type SelectedArtworkContextValue = {
  selectedArtwork?: IArtwork | undefined;
  setSelectedArtwork?: Dispatch<SetStateAction<IArtwork>> | undefined;
};
// default value of the context
const defaultValue: SelectedArtworkContextValue = {
  selectedArtwork: undefined,
};

// create context
const SelectedArtworkContext =
  createContext<SelectedArtworkContextValue>(defaultValue);

// Proptypes of Provider component
type SelectedArtworkContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const SelectedArtworkProvider = (props: SelectedArtworkContextProps) => {
  const [selectedArtwork, setSelectedArtwork] = useState();

  return (
    <SelectedArtworkContext.Provider
      value={{ selectedArtwork, setSelectedArtwork }}
      {...props}
    />
  );
};

// Default hook to retrieve context data
const useSelectedArtwork = () => {
  const context = useContext(SelectedArtworkContext);
  if (context === undefined) {
    throw new Error('You must be inside a context provider'); // also, you can throw an error if it is you need the context
  }
  return context;
};

export { SelectedArtworkProvider, useSelectedArtwork };
