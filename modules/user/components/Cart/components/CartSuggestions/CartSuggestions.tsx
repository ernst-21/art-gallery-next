import React, { useEffect, useMemo } from 'react';
import { useMutation } from 'react-query';
import { SpinLoaderContainer } from '../../../../../../components/ui/SpinLoaderContainer';
import { useCart } from '../../../../../../context/cart';
import { CartArtworks } from '../../../../../../types/common.types';
import ArtworksContainer from '../../../../../artworks/containers/ArtworksContainer';
import { getSuggestionsInCart } from '../../../../../artworks/services/artworks-api';

const CartSuggestions = () => {
  const { cart } = useCart();
  const {
    mutate: getSuggestions,
    isLoading,
    isError,
    data,
  } = useMutation('cart-suggestions', (cart: CartArtworks) =>
    getSuggestionsInCart(cart)
  );

  useEffect(() => {
    if (cart && cart.length) {
      getSuggestions({ cart });
    }
  }, [cart, getSuggestions]);

  const artworksToShow = useMemo(() => {
    return data?.slice(0, 4);
  }, [data]);

  if (isError) {
    return null;
  }

  if (isLoading) {
    return <SpinLoaderContainer />;
  }

  return (
    <ArtworksContainer
      title={'You might also like'}
      artworks={artworksToShow!}
    />
  );
};

export default CartSuggestions;
