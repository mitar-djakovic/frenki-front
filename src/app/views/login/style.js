import styled from 'styled-components';

const LoginViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const WelcomeInfoContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #060039;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 100vh;
    position: absolute;
    right: 0
  }

  h1 {
    color: #FFF;
    z-index: 1;
    letter-spacing: 6px;
    font-weight: 500;
  }
`;

const Title = styled.h1`
  font-size: 80px;
  letter-spacing: 8px;
  font-weight: 500;
  color: #FFF;
`;

export {
  LoginViewContainer,
  WelcomeInfoContainer,
  Title,
};
