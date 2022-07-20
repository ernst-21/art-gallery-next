import mongoose, { Schema, model, Model } from 'mongoose';
import { ITestimonial } from '../interfaces';

const testimonialSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    authPosition : {type: String, required: false},
    testimonial: {type: String, required: true},
}, { timestamps: true });

const Testimonial: Model<ITestimonial> = mongoose.models.Testimonial || model('Testimonial', testimonialSchema);

export default Testimonial;