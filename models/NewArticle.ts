import mongoose, { Schema, model, Model } from 'mongoose';
import { INewArticle } from '../interfaces';

const newSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const NewArticle: Model<INewArticle> =
  mongoose.models.NewArticle || model('NewArticle', newSchema);

export default NewArticle;
