import * as yup from 'yup';

export const singupValidationSchema = yup.object({
  firstName: yup.string().required('First name is required.').min(2, 'First name is to short.').max(20, 'First name is to long.')
    .default(''),
  lastName: yup.string().required('Last name is required.').min(2, 'Last name is to short.').max(20, 'Last name is to long.')
    .default(''),
  email: yup.string().email('Email is invalid.').required('Email is required.'),
  password: yup.string().required('Password is required.')
    .default('').min(6, 'Password is not long enough.')
    .max(30, 'Password is too long.')
    .oneOf([yup.ref('repeatPassword'), null], 'Passwords must match.'),
  repeatPassword: yup.string().required('Repeated password is required.')
    .default('')
    .min(6, 'Password is not long enough.')
    .max(30, 'Repeated password is to long.')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),

});
