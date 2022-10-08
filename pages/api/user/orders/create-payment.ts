import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../database';
import {
  IArtwork,
  IPayment,
  IPaymentItem,
  ShippingAddress,
} from '../../../../interfaces';
import Payment from '../../../../models/Payment';
import { getToken } from 'next-auth/jwt';
import { Artwork } from '../../../../models';

type Data =
  | {
      message: string;
    }
  | {
      payment: IPayment;
    };

const createPayment = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const {
    user = '',
    paymentItems = [],
    numberOfItems = 0,
    shippingAddress = {},
    total = 0,
  } = req.body as {
    user: string;
    paymentItems: IPaymentItem[];
    numberOfItems: number;
    total: number;
    shippingAddress: ShippingAddress;
  };

  const artworksIdx = paymentItems.map((item) => item._id);

  if (!user) {
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
  if (user !== token?.user?._id) {
    return res.status(400).json({ message: 'Bad Request' });
  }

  const newPayment = new Payment({
    user,
    paymentItems,
    numberOfItems,
    total,
    shippingAddress,
  });

  db.connect();

  try {
    await newPayment.save({ validateBeforeSave: true });
    await Artwork.updateMany(
      { _id: { $in: artworksIdx } },
      {
        $push: { purchased: user },
      },
      { new: true }
    ).select(
      'name artist slug category price _id gallery addedToCart tags colors featured orientation url voters size purchased artist_Id'
    );
    db.disconnect();
    return res.status(200).json({
      payment: newPayment,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Check server logs' });
  }
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return createPayment(req, res);
    default:
      res.status(400).json({ message: 'Bad Request' });
  }
}
