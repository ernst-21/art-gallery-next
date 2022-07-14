import mongoose, { Schema, model, Model } from 'mongoose';
import { IUser } from '../interfaces';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: {
      values: ['admin', 'client'],
      message: '{VALUE} no es un rol válido',
      default: 'client',
      required: true,
    },
  },
  favoriteArtworks : [{type: Schema.Types.ObjectId, ref: 'Artwork'}],
  favoriteArtists : [{type: Schema.Types.ObjectId, ref: 'Artist'}],
}, { timestamps: true });

const User: Model<IUser> = mongoose.models.User || model('User', userSchema);

export default User;