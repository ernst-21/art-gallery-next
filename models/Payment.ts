import mongoose, { Schema, model, Model } from 'mongoose';
import { IPayment } from '../interfaces';

const paymentSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },

    paymentItems: [
      {
        _id: { type: String, required: true },
        name: { type: String, required: true },
        artist: { type: String, required: true },
        description: { type: String, required: true },
        size: { type: String, required: true },
        category: { type: String, required: true },
        slug: { type: String, required: true },
        url: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],

    shippingAddress: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      address: { type: String, required: true },
      address2: { type: String },
      zip: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
      phone: { type: String, required: true },
    },

    numberOfItems: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

const Payment: Model<IPayment> =
  mongoose.models.Payment || model('Payment', paymentSchema);

export default Payment;
