import styled from 'styled-components';

const FormContainer = styled.div`
`;

const InputContainer = styled.div`
  position: relative;
  padding-bottom: 4px;
  margin-bottom: 10px;

  .error-active {
    position: absolute;
    bottom: 0;
  }
`;

export {
  FormContainer,
  InputContainer,
};
