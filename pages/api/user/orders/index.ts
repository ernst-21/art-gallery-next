import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../database';
import { IOrder } from '../../../../interfaces';
import { Order } from '../../../../models';

type Data = { message: string } | IOrder[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return getUserOrders(req, res);
    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

export const getUserOrders = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await db.connect();
  try {
    const orders = await Order.find({
      user: { $in: req.body.userId },
    }).select('_id numberOfItems total createdAt isPaid');
    await db.disconnect();
    return res.status(200).json(orders);
  } catch (error) {
    res.status(422).json({ message: error });
  }
};
