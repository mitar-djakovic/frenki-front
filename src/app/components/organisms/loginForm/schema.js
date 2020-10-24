import * as yup from 'yup';

export const loginValidationSchema = yup.object({
  email: yup.string().email('Email is invalid.').required('Email is required.').default(''),
  password: yup.string().required('Password is required.').default('').min(6, 'Password is not long enough.')
    .max(30, 'Password is too long.'),
});
