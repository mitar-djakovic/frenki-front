import * as yup from 'yup';

export const singupValidationSchema = yup.object({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().required('Required'),
  repeatPassword: yup.string().required('Required'),
});
