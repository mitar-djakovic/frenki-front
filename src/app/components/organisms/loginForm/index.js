import React from 'react';
import {
  Formik, Form, Field,
} from 'formik';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import { FormContainer } from './style';

const LoginForm = () => (
  <FormContainer>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
      }}
    >
      {({ handleChange, values, handleSubmit }) => (
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
          <Field
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={values.password}
            component={Input}
            placeholder="Password"
          />
          <Button text="Login" type="submit" />
        </Form>
      )}
    </Formik>
  </FormContainer>
);

export default LoginForm;
