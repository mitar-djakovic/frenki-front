import React from 'react';
import {
  Formik, Form, Field,
} from 'formik';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import ErrorText from '../../atoms/errorText';
import { singupValidationSchema } from './schema';
import {
  FormContainer, InputContainer, Wrapper, Title, WelcomeInfo, WelcomeText,
} from './style';

const LoginForm = () => (
  <FormContainer>
    <Wrapper>
      <Title>frenki.</Title>
      <WelcomeText>Sig up!</WelcomeText>
      <WelcomeInfo>Sign up to continue</WelcomeInfo>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          repeatPassword: '',
        }}
        onSubmit={(values) => {
        }}
        validationSchema={singupValidationSchema}
      >
        {({
          values, errors, touched, handleChange, handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <Field
                type="text"
                name="firstName"
                id="firstName"
                onChange={handleChange}
                value={values.firstName}
                component={Input}
                placeholder="First name"
                error={errors.firstName}
              />
              {errors.firstName && touched.firstName && (
                <ErrorText error={errors.firstName} />
              )}
            </InputContainer>
            <InputContainer>
              <Field
                type="text"
                name="firstName"
                id="lastName"
                onChange={handleChange}
                value={values.lastName}
                component={Input}
                placeholder="Last name"
                error={errors.lastName}
              />
              {errors.lastName && touched.lastName && (
                <ErrorText error={errors.lastName} />
              )}
            </InputContainer>
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
            <InputContainer>
              <Field
                type="password"
                name="repeatPassword"
                id="repeatPassword"
                onChange={handleChange}
                value={values.repeatPassword}
                component={Input}
                placeholder="Repeat password"
                error={errors.repeatPassword}
              />
              {errors.repeatPassword && touched.repeatPassword && (
                <ErrorText error={errors.repeatPassword} />
              )}
            </InputContainer>
            <Button text="Sign up" type="submit" />
          </Form>
        )}
      </Formik>
    </Wrapper>
  </FormContainer>
);

export default LoginForm;
