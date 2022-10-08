import { db } from '.';
import { IPayment } from '../interfaces';
import { Payment } from '../models';

export const getPaymentById = async (_id: string): Promise<IPayment | null> => {
  await db.connect();
  const payment = await Payment.findOne({ _id }).lean();
  await db.disconnect();

  if (!payment) {
    return null;
  }

  return JSON.parse(JSON.stringify(payment));
};
