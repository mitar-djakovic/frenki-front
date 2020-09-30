import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  z-index: 1;
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 8px;
  padding-bottom: 1px;

  .error-active {
    position: absolute;
    bottom: 0;
  }
`;

const Wrapper = styled.div`
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 50px;
  letter-spacing: 8px;
  font-weight: 500;
  color: #FFFFFF;
  margin-bottom: 90px;
`;

const WelcomeText = styled.h2`
  font-size: 32px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #FFFFFF;
  margin-bottom: 12px;
`;

const WelcomeInfo = styled.p`
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #e5e5e5;
  margin-bottom: 48px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  
  button {
    margin-right: 20px;
  }
`;

export {
  FormContainer,
  InputContainer,
  Wrapper,
  Title,
  WelcomeText,
  WelcomeInfo,
  ButtonsContainer,
};
