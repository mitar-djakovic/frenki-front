import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: #3366FF;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  padding: 8px 24px;
  color: #FFF;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #FFFFFF;
  min-width: 84px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #6690FF;
    cursor: pointer;
  }
`;

export default Button;
