import React, { useState, useEffect } from 'react';
import {
  Formik, Form, Field,
} from 'formik';
import { connect } from 'react-redux';
import { BsCheckCircle, BsFillExclamationCircleFill } from 'react-icons/bs';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import ErrorText from '../../atoms/errorText';
import Snackbar from '../../atoms/snackbar';
import { loginValidationSchema } from './schema';
import {
  FormContainer, InputContainer, Wrapper, Title, WelcomeInfo, WelcomeText, ButtonsContainer,
} from './style';
import { logInAction } from '../../../redux/actions/user';

const LoginForm = ({
  setActiveForm, login, loading, message, snackbarActive, error,
}) => {
  const [icon, setIcon] = useState(null);
  useEffect(() => {
    if (error) {
      setIcon(<BsFillExclamationCircleFill size="17px" />);
    } else {
      setIcon(<BsCheckCircle size="17px" />);
    }
  }, [error]);

  return (
    <FormContainer>
      <Wrapper>
        <Title>frenki.</Title>
        <WelcomeText>Welcome Back!</WelcomeText>
        <WelcomeInfo>Log in to continue</WelcomeInfo>
        <Formik
          initialValues={{
            email: 'mitar-djakovic2401993@hotmail.com',
            password: '123456',
          }}
          onSubmit={(values) => {
            const { email, password } = values;
            if (email && password) {
              login(email, password);
            }
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
              <ButtonsContainer>
                <Button
                  loading={loading}
                  text="Login"
                  type="submit"
                />
                <Button
                  text="Create account"
                  onClick={() => setActiveForm('signup')}
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
  login: (email, password) => dispatch(logInAction(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
