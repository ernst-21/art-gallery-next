import { IArtwork, ShippingAddress } from '../../interfaces';
import { CartState } from './';

type CartActionType =
  | {
      type: '[Cart] - LoadCart from cookie | storage';
      payload: IArtwork[];
    }
  | { type: '[Cart] - Add artwork to cart'; payload: IArtwork }
  | { type: '[Cart] - Remove artwork from cart'; payload: IArtwork }
  | { type: '[Cart] - Update address'; payload: ShippingAddress | undefined }
  | {
      type: '[Cart] - Update order summary';
      payload: {
        numberOfItems: number;
        total: number;
      };
    };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case '[Cart] - LoadCart from cookie | storage':
      return {
        ...state,
        isLoaded: true,
        cart: action.payload,
      };
    case '[Cart] - Add artwork to cart':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case '[Cart] - Remove artwork from cart':
      return {
        ...state,
        cart: state.cart.filter(
          (artwork) => !(artwork._id === action.payload._id)
        ),
      };
    case '[Cart] - Update order summary':
      return {
        ...state,
        ...action.payload,
      };
    case '[Cart] - Update address':
      return {
        ...state,
        shippingAddress: action.payload,
      };
    default:
      return state;
  }
};
