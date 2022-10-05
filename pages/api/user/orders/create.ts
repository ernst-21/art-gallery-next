import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../database';
import { IOrder, IOrderItem, ShippingAddress } from '../../../../interfaces';
import Order from '../../../../models/Order';
import { getToken } from 'next-auth/jwt';

type Data =
  | {
      message: string;
    }
  | {
      order: IOrder;
    };

const createOrder = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const {
    userId = '',
    orderItems = [],
    numberOfItems = 0,
    shippingAddress = {},
    total = 0,
    isPaid = false,
    paidAt = '',
  } = req.body as {
    userId: string;
    orderItems: IOrderItem[];
    numberOfItems: number;
    total: number;
    shippingAddress: ShippingAddress;
    isPaid: boolean;
    paidAt: string;
  };

  if (!userId) {
    return res.status(400).json({ message: 'Bad Request' });
  }

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    return res.status(400).json({ message: 'Bad Request' });
  }

  //@ts-ignore
  if (userId !== token?.user?._id) {
    return res.status(400).json({ message: 'Bad Request' });
  }

  const newOrder = new Order({
    user: userId,
    orderItems,
    numberOfItems,
    total,
    shippingAddress,
    isPaid,
    paidAt,
  });

  db.connect();

  try {
    await newOrder.save({ validateBeforeSave: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Check server logs' });
  }
  db.disconnect();
  return res.status(200).json({
    order: newOrder,
  });
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return createOrder(req, res);
    default:
      res.status(400).json({ message: 'Bad Request' });
  }
}
