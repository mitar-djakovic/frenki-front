import styled from 'styled-components';

const LoginViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #060039;
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
    transform: rotate(180deg);
  }
`;

const Title = styled.h1`
  font-size: 80px;
  letter-spacing: 8px;
  font-weight: 700;
  color: #FFF;
  z-index: 1;
  line-height: 1.3;
`;

const Paragrpah = styled.p`
  color: #FFFFFF;
  font-size: 26px;
  line-height: 1.3;
  font-weight: 600;
`;

const Wrapper = styled.div`
  z-index: 1;
  width: 70%;
`;

export {
  LoginViewContainer,
  WelcomeInfoContainer,
  Title,
  Paragrpah,
  Wrapper,
};
