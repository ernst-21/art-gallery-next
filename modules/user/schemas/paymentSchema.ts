import * as Yup from 'yup';

export const paymentSchema = Yup.object().shape({
  card: Yup.number()
    .positive()
    .min(12)
    .max(12)
    .required('This field is required'),
  expirationDate: Yup.string().required('This field is required'),
  cvc: Yup.string().max(255).required('This field is required'),
});
