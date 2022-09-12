import mongoose, { Schema, model, Model } from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;
import { IArtist } from '../interfaces';

const artistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    //artworks: [{ type: ObjectId, ref: 'Artwork' }],
    recommended: {
      type: Boolean,
      required: true,
    },
    about: { type: String, required: true },
    pic: {
      type: String,
      required: true,
    },
    discipline: { type: String },
    country: {
      type: String,
      required: true,
    },
    likes: [{ type: ObjectId, ref: 'User' }],
    identifier: { type: String, required: true },
  },
  { timestamps: true }
);

const Artist: Model<IArtist> =
  mongoose.models.Artist || model('Artist', artistSchema);

export default Artist;
