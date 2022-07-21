import { ITestimonial } from '../interfaces';
import { Testimonial } from '../models';
import { db } from '.';

export const getTestimonials = async (): Promise<ITestimonial[]> => {
  await db.connect();

  const testimonials = await Testimonial.find()
    .select('author image authPosition testimonial -_id')
    .lean();

  await db.disconnect();

  return testimonials;
};
