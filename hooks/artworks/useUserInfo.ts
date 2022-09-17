import { IArtist, IArtwork } from '../../interfaces';
import { useUser } from '../security/useUser';
import { useContext, useMemo } from 'react';
import { CartContext } from '../../context/cart';

export const useHasUserVoted = (arr: string[], entity: IArtwork | IArtist) => {
  const { user } = useUser();

  const hasVoted = useMemo(() => {
    if (user && entity) {
      return arr.includes(user?._id);
    }
    return false;
  }, [arr, entity, user]);

  return { hasVoted };
};

export const useUserInfo = (artwork: IArtwork) => {
  const { hasVoted } = useHasUserVoted(artwork?.voters, artwork);
  const { isAuthenticated } = useUser();
  const { numberOfItems } = useContext(CartContext);

  const hasAddedToCart = useMemo(() => {
    const cartArtworks = JSON.parse(localStorage.getItem('art-cart')!);
    let foundArtwork = cartArtworks?.find(
      (item: IArtwork) => item._id === artwork?._id
    );
    return !isAuthenticated ? false : !!foundArtwork;
    //eslint-disable-next-line
  }, [artwork, numberOfItems, isAuthenticated]);

  return { hasVoted, hasAddedToCart, isAuthenticated };
};
