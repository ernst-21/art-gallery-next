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

export interface IPayment {
  _id?: string;
  user?: IUser | string;
  paymentItems: IPaymentItem[];
  shippingAddress: ShippingAddress;

  numberOfItems: number;
  total: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IPaymentItem {
  _id: string;
  name: string;
  artist: string;
  description: number;
  slug: string;
  category: string;
  url: string;
  price: number;
  size: 'small' | 'medium' | 'big';
}
