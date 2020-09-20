import * as yup from 'yup';

export const loginValidationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().required('Required'),
});
