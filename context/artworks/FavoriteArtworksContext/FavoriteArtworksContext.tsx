import { createContext, useContext, useState } from 'react';

// Data value of the provider context
type FavoriteArtworksContextValue = {
  favoritesCount: number;
  setFavoritesCount: () => number;
};
// default value of the context
const defaultValue: FavoriteArtworksContextValue = {
  favoritesCount: 0,
  setFavoritesCount: () => 0,
};

// create context
const FavoriteArtworksContext =
  createContext<FavoriteArtworksContextValue>(defaultValue);

// Prop types of Provider component
type FavoriteArtworksContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const FavoriteArtworksProvider = (props: FavoriteArtworksContextProps) => {
  const [favoritesCount, setFavoritesCount] = useState(0);

  return (
    <FavoriteArtworksContext.Provider
      //@ts-ignore
      value={{ favoritesCount, setFavoritesCount }}
      {...props}
    />
  );
};

// Default hook to retrieve context data
const useFavoriteArtworks = () => {
  const context = useContext(FavoriteArtworksContext);
  if (context === undefined) {
    throw new Error('You must be inside a context provider'); // also, you can throw an error if it is you need the context
  }
  return context;
};

export { FavoriteArtworksProvider, useFavoriteArtworks };
