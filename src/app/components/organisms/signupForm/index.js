import React, { useState, useEffect } from 'react';
import {
  Formik, Form, Field,
} from 'formik';
import { connect } from 'react-redux';
import { BsCheckCircle, BsFillExclamationCircleFill } from 'react-icons/bs';
import Snackbar from '../../atoms/snackbar';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import ErrorText from '../../atoms/errorText';
import { singupValidationSchema } from './schema';
import {
  FormContainer, InputContainer, Wrapper, Title, WelcomeInfo, WelcomeText, ButtonsContainer,
} from './style';

import { signUpAction } from '../../../redux/actions/user';

const LoginForm = ({
  setActiveForm, signUp, snackbarActive, message, error, loading,
}) => {
  const [icon, setIcon] = useState(null);
  useEffect(() => {
    if (error) {
      setIcon(<BsFillExclamationCircleFill size="17px" />);
    } else {
      setIcon(<BsCheckCircle size="17px" />);
    }
  }, [error]);
  const lol = 'lol';
  return (
    <FormContainer>
      <Wrapper>
        <Title>frenki.</Title>
        <WelcomeText>Hello There!</WelcomeText>
        <WelcomeInfo>Sign up to continue</WelcomeInfo>
        <Formik
          initialValues={{
            firstName: 'Mitar',
            lastName: 'Djakovic',
            email: 'mitar@mitar.com',
            password: '1234567',
            repeatPassword: '1234567',
          }}
          onSubmit={(values) => {
            const {
              firstName, lastName, email, password, repeatPassword,
            } = values;

            signUp(firstName, lastName, email, password, repeatPassword);
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
              <ButtonsContainer>
                <Button
                  loading={loading}
                  text="Signup"
                  type="submit"
                />
                <Button
                  text="Welcome back"
                  onClick={() => setActiveForm('login')}
                />
              </ButtonsContainer>
            </Form>
          )}
        </Formik>
        {snackbarActive && (
          <Snackbar
            snackbarActive={snackbarActive}
            message={message}
            error={error}
            icon={icon}
          />
        )}
      </Wrapper>
    </FormContainer>
  );
};

const mapStateToProps = ({
  user: {
    loading, message, snackbarActive, error,
  },
}) => ({
  loading,
  message,
  snackbarActive,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (firstName, lastName, email, password, repeatPassword) => {
    dispatch(signUpAction(firstName, lastName, email, password, repeatPassword));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
