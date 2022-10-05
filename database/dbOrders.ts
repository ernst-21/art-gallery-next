import { db } from '.';
import { IOrder } from '../interfaces';
import Order from '../models/Order';

export const getUserOrders = async (userId: string): Promise<IOrder[]> => {
  await db.connect();

  try {
    const orders = await Order.find({ user: { $in: userId } });
    await db.disconnect();
    return JSON.parse(JSON.stringify(orders));
  } catch (error) {
    return JSON.parse(JSON.stringify({ message: error }));
  }
};
