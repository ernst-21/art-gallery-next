import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../../database';
import { IPayment } from '../../../../../interfaces';
import { Payment } from '../../../../../models';

type Data = { message: string } | IPayment[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return getPayments(req, res);
    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

export const getPayments = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await db.connect();
  try {
    const payments = await Payment.find({
      user: { $in: req.body.userId },
    }).select('_id numberOfItems total createdAt');
    await db.disconnect();
    return res.status(200).json(payments);
  } catch (error) {
    res.status(422).json({ message: error });
  }
};
