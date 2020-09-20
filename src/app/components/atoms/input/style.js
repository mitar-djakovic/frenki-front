import styled from 'styled-components';

const Input = styled.input`
  width: 320px;
  heigh: 40px;
  border: none;
  background: #FBFBFB;
  border: 1px solid #D6E4EC;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px 20px;

  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #343C44;
  margin: 10px 0px;
  
  &::placeholder {
    color: #AABBC6;
  }
`;

export default Input;
