import mongoose, { Schema, model, Model } from 'mongoose';
const {ObjectId} = mongoose.Schema.Types;
import { IArtwork } from '../interfaces';

const artworkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    artist_Id: {type: String, required: true},
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        default: 'all'
    },
    price: {
        type: Number,
        required: true
    },
    tags: [{type: String}],
    colors: [{type: String}],
    gallery: {
        type: String
    },
    featured: {
        type: Boolean,
        required: true
    },
    orientation: {
        type: String,
        required: true,
        enum: {
            values: ['portrait', 'landscape', 'square'],
            message: '{VALUE} is not a valid orientation',
        },
    },
    size: {
        type: String,
        enum: {
            values: ['medium', 'small', 'big'],
            message: '{VALUE} is not a valid size',
        }
    },
    url: {
        type: String,
        required: true
    },
    voters : [{type: ObjectId, ref: 'User'}],
    purchased: [{type: ObjectId, ref: 'User'}]
}, { timestamps: true });

const Artwork: Model<IArtwork> = mongoose.models.User || model('Artwork', artworkSchema);

export default Artwork;