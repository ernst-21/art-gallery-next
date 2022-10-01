import * as Yup from 'yup';

export const shippingSchema = Yup.object().shape({
  firstName: Yup.string().min(2).required('This field is required'),
  lastName: Yup.string().required('This field is required'),
  address: Yup.string().max(255).required('This field is required'),
  address2: Yup.string().max(255),
  zip: Yup.string().max(255).required('This field is required'),
  city: Yup.string().max(255).required('This field is required'),
  country: Yup.string().max(255).required('This field is required'),
  phone: Yup.string().max(10).required('This field is required'),
});
