import { IArtist, IArtwork } from '../../interfaces';
import { useUser } from '../security/useUser';
import { useMemo } from 'react';
import Cookies from 'js-cookie';

const cookiesArtworks = Cookies.get('cart')
  ? JSON.parse(Cookies.get('cart')!)
  : [];

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
  const { user } = useUser();
  const { hasVoted } = useHasUserVoted(artwork?.voters, artwork);

  const hasAddedToCart = useMemo(() => {
    if (artwork) {
      return cookiesArtworks.includes(artwork._id);
    }
    return false;
  }, [artwork]);

  return { hasVoted, hasAddedToCart };
};
