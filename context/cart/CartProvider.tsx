import React, {
  useReducer,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from 'react';
import { IArtwork, ShippingAddress } from '../../interfaces';
import { CartContext, cartReducer } from './';

export interface CartState {
  isLoaded: boolean;
  cart: IArtwork[];
  numberOfItems: number;
  total: number;
  shippingAddress?: ShippingAddress;
}

const CART_INITIAL_STATE: CartState = {
  isLoaded: false,
  cart: [],
  numberOfItems: 0,
  total: 0,
};

type ProviderProps = {
  children: ReactNode;
};

const CartProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('address')) {
      const shippingAddress = JSON.parse(localStorage.getItem('address')!);
      dispatch({
        type: '[Cart] - Update address',
        payload: shippingAddress,
      });
    }
  }, []);

  useEffect(() => {
    try {
      const localStorageArtworks = localStorage.getItem('art-cart')
        ? JSON.parse(localStorage.getItem('art-cart')!)
        : [];
      dispatch({
        type: '[Cart] - LoadCart from cookie | storage',
        payload: localStorageArtworks,
      });
      setIsMounted(true);
    } catch (e) {
      console.log(e);
      dispatch({
        type: '[Cart] - LoadCart from cookie | storage',
        payload: [],
      });
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('art-cart', JSON.stringify(state.cart));
    }
  }, [state.cart, mounted]);

  useEffect(() => {
    const numberOfItems = state.cart.length;
    const total = state.cart.reduce(
      (prev, current: IArtwork) => current.price + prev,
      0
    );

    const orderSummary = {
      numberOfItems,
      total,
    };
    dispatch({
      type: '[Cart] - Update order summary',
      payload: orderSummary,
    });
  }, [state.cart, mounted]);

  const addArtworkToCart = (artwork: IArtwork) => {
    dispatch({
      type: '[Cart] - Add artwork to cart',
      payload: artwork,
    });
  };

  const removeArtworkFromCart = (artwork: IArtwork) => {
    dispatch({ type: '[Cart] - Remove artwork from cart', payload: artwork });
  };

  const updateAddress = (address: ShippingAddress) => {
    localStorage.setItem('address', JSON.stringify(address));
    dispatch({ type: '[Cart] - Update address', payload: address });
  };

  const clearCart = () => {
    dispatch({ type: '[Cart] - Clear cart', payload: [] });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addArtworkToCart,
        removeArtworkFromCart,
        clearCart,
        updateAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('You must be inside a context provider'); // also, you can throw an error if it is you need the context
  }
  return context;
};

export { CartProvider, useCart };
