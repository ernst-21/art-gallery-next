import { createContext } from 'react';
import { IArtwork, ShippingAddress } from '../../interfaces';

interface ContextProps {
  isLoaded: boolean;
  cart: IArtwork[];
  numberOfItems: number;
  total: number;
  shippingAddress?: ShippingAddress | undefined;

  addArtworkToCart: (artwork: IArtwork) => void;
  removeArtworkFromCart: (artwork: IArtwork) => void;
  updateAddress: (address: ShippingAddress) => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as ContextProps);
