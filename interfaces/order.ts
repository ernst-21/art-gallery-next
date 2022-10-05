import { IArtwork } from '.';
import { IUser } from './user';

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  zip: string;
  city: string;
  country: string;
  phone: string;
}

export interface IOrder {
  _id?: string;
  user?: IUser | string;
  orderItems: IOrderItem[];
  shippingAddress: ShippingAddress;

  numberOfItems: number;
  total: number;

  isPaid: boolean;
  paidAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IOrderItem {
  _id: string;
  name: string;
  artist: string;
  description: number;
  slug: string;
  category: string;
  image: string;
  price: number;
  size: 'small' | 'medium' | 'big';
}
