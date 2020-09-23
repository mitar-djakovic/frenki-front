import React from 'react';
import LoginForm from '../../components/organisms/loginForm';
import Img from '../../components/atoms/img';
import {
  LoginViewContainer, WelcomeInfoContainer, Title,
} from './style';
import { loginBackground } from '../../../assets';

const LoginView = () => (
  <LoginViewContainer>
    <WelcomeInfoContainer>
      <Img src={loginBackground} />
      <Title>frenki.</Title>
    </WelcomeInfoContainer>
    <LoginForm />
  </LoginViewContainer>
);

export default LoginView;
