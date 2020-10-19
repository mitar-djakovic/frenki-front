import React from 'react';
import {
  Formik, Form, Field,
} from 'formik';
import { connect } from 'react-redux';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import ErrorText from '../../atoms/errorText';
import { loginValidationSchema } from './schema';
import {
  FormContainer, InputContainer, Wrapper, Title, WelcomeInfo, WelcomeText, ButtonsContainer,
} from './style';
import { logInAction, signUpAction } from '../../../redux/actions/user';

const LoginForm = ({ setActiveForm, logIn }) => (
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
          const { email, password } = values;
          if (email && password) {
            logIn(email, password);
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
    </Wrapper>
  </FormContainer>
);

const mapDispatchToProps = (dispatch) => ({
  logIn: (email, password) => dispatch(logInAction(email, password)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
