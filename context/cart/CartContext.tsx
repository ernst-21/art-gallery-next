import { createContext } from 'react';
import { IArtwork } from '../../interfaces';

interface ContextProps {
  isLoaded: boolean;
  cart: IArtwork[];
  numberOfItems: number;
  total: number;

  addArtworkToCart: (artwork: IArtwork) => void;
  removeArtworkFromCart: (artwork: IArtwork) => void;
}

export const CartContext = createContext({} as ContextProps);
