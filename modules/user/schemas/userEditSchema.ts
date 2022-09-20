import * as Yup from 'yup';

export const editSchema = Yup.object().shape({
  name: Yup.string().min(2),
  email: Yup.string().email('validEmail').max(255).required('required'),

  password: Yup.string(),
});
