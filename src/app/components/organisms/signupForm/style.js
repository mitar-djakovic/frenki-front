import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.div`
  position: relative;
  padding-bottom: 4px;
  margin-bottom: 10px;
  margin-top: 30px;

  .error-active {
    position: absolute;
    bottom: 0;
  }
`;

const Wrapper = styled.div``;

const Title = styled.h1`
  font-size: 50px;
  letter-spacing: 8px;
  font-weight: 500;
  color: #060039;
`;

const WelcomeText = styled.h2`
  font-size: 32px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #060039;
  line-height: 1.6;
  margin-bottom: 20px;
  margin-top: 65px;
`;

const WelcomeInfo = styled.p`
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #E6E6E6;
`;

export {
  FormContainer,
  InputContainer,
  Wrapper,
  Title,
  WelcomeText,
  WelcomeInfo,
};
