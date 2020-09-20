import React from 'react';
import {
  Formik, Form, Field,
} from 'formik';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import ErrorText from '../../atoms/errorText';
import { FormContainer } from './style';
import { loginValidationSchema } from './schema';

const LoginForm = () => (
  <FormContainer>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
      }}
      validationSchema={loginValidationSchema}
    >
      {({
        handleChange, values, handleSubmit, errors, touched,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={values.email}
            component={Input}
            placeholder="Email"
          />
          {errors.email && touched.email && (
            <ErrorText error={errors.email} />
          )}
          <Field
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={values.password}
            component={Input}
            placeholder="Password"
          />
          {errors.password && touched.password && (
            <ErrorText error={errors.password} />
          )}
          <Button text="Login" type="submit" />
        </Form>
      )}
    </Formik>
  </FormContainer>
);

export default LoginForm;
