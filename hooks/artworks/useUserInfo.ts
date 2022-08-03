import { IArtwork } from '../../interfaces';
import { useUser } from '../security/useUser';
import { useMemo } from 'react';
import Cookies from 'js-cookie';

const cookiesArtworks = Cookies.get('cart')
  ? JSON.parse(Cookies.get('cart')!)
  : [];

export const useUserInfo = (artwork: IArtwork | undefined) => {
  const { user } = useUser();

  const hasVoted = useMemo(() => {
    if (user && artwork) {
      return artwork?.voters?.includes(user?._id);
    }
    return false;
  }, [artwork, user]);

  const hasAddedToCart = useMemo(() => {
    if (artwork) {
      return cookiesArtworks.includes(artwork._id);
    }
    return false;
  }, [artwork]);

  return { hasVoted, hasAddedToCart };
};
