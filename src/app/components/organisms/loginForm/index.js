import React from 'react';
import {
  Formik, Form, Field,
} from 'formik';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import ErrorText from '../../atoms/errorText';
import { loginValidationSchema } from './schema';
import {
  FormContainer, InputContainer, Wrapper, Title, WelcomeInfo, WelcomeText,
} from './style';

const LoginForm = () => (
  <FormContainer>
    <Wrapper>
      <Title>frenki.</Title>
      <WelcomeText>Welcome Back!</WelcomeText>
      <WelcomeInfo>Log in to continue</WelcomeInfo>
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
          values, errors, touched, handleChange, handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <Field
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={values.email}
                component={Input}
                placeholder="Email"
                error={errors.email}
              />
              {errors.email && touched.email && (
              <ErrorText error={errors.email} />
              )}
            </InputContainer>
            <InputContainer>
              <Field
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={values.password}
                component={Input}
                placeholder="Password"
                error={errors.password}
              />
              {errors.password && touched.password && (
              <ErrorText error={errors.password} />
              )}
            </InputContainer>
            <Button text="Login" type="submit" />
          </Form>
        )}
      </Formik>
    </Wrapper>
  </FormContainer>
);

export default LoginForm;
