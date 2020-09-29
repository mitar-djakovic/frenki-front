import React, { useState } from 'react';
import LoginForm from '../../components/organisms/loginForm';
import SignupForm from '../../components/organisms/signupForm';
import Img from '../../components/atoms/img';
import {
  LoginViewContainer, WelcomeInfoContainer, Title,
} from './style';
import { loginBackground } from '../../../assets';

const LoginView = () => {
  const [activeForm, setActiveForm] = useState('login');

  return (
    <LoginViewContainer>
      <WelcomeInfoContainer>
        <Img src={loginBackground} />
        <Title>frenki.</Title>
      </WelcomeInfoContainer>
      {activeForm === 'login'
        ? <LoginForm setActiveForm={setActiveForm} />
        : <SignupForm setActiveForm={setActiveForm} />}
    </LoginViewContainer>
  );
};

export default LoginView;
