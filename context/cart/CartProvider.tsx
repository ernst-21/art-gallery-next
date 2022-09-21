import React, { useReducer, ReactNode, useEffect, useState } from 'react';
import { useUser } from '../../hooks/security/useUser';
import { IArtwork } from '../../interfaces';
import { CartContext, cartReducer } from './';

export interface CartState {
  isLoaded: boolean;
  cart: IArtwork[];
  numberOfItems: number;
  total: number;
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

export const CartProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);
  const { isAuthenticated } = useUser();
  const [mounted, setIsMounted] = useState(false);

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

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch({
        type: '[Cart] - LoadCart from cookie | storage',
        payload: [],
      });
    }
  }, [isAuthenticated]);

  const addArtworkToCart = (artwork: IArtwork) => {
    dispatch({
      type: '[Cart] - Add artwork to cart',
      payload: artwork,
    });
  };

  const removeArtworkFromCart = (artwork: IArtwork) => {
    dispatch({ type: '[Cart] - Remove artwork from cart', payload: artwork });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addArtworkToCart,
        removeArtworkFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
