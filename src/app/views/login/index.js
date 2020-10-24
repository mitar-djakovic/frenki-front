import React, { useState } from 'react';
import LoginForm from '../../components/organisms/loginForm';
import SignupForm from '../../components/organisms/signupForm';
import Img from '../../components/atoms/img';
import {
  LoginViewContainer, WelcomeInfoContainer, Title, Paragrpah, Wrapper,
} from './style';
import { loginBackground } from '../../../assets';

const LoginView = () => {
  const [activeForm, setActiveForm] = useState('login');

  return (
    <LoginViewContainer>
      <WelcomeInfoContainer>
        <Img src={loginBackground} />
        <Wrapper>
          <Title>frenki.</Title>
          <Paragrpah>
            App that will solve all your organisation problems and save you time.
          </Paragrpah>
        </Wrapper>
      </WelcomeInfoContainer>
      {activeForm === 'login'
        ? <LoginForm setActiveForm={setActiveForm} />
        : <SignupForm setActiveForm={setActiveForm} />}
    </LoginViewContainer>
  );
};

export default LoginView;
