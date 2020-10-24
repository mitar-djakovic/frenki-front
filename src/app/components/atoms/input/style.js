import styled from 'styled-components';

const Input = styled.input`
  width: 420px;
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
  margin-bottom: 24px;
  outline: none;
  
  ${({ className }) => className === 'error' && ({
    color: '#E25822',
  })}

  ${({ className }) => (className === 'validated' || className === 'focus validated' ? ({
    color: '#3AA76D',
  }) : null)}

  &::placeholder {
    color: #AABBC6;
  }

  &:hover {
    cursor: pointer;
    filter: drop-shadow(0px 0px 2px rgba(117, 131, 142, 0.04));
    filter: drop-shadow(0px 4px 2px rgba(52, 60, 68, 0.16));
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const InputStatusBar = styled.div`
  display: none;
  box-sizing: border-box;
  width: 416px;
  margin-left: 2px;
  height: 3px;
  position: absolute;
  bottom: 0px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
  ${({ className }) => className === 'error' && ({
    backgroundColor: '#E2164B',
    display: 'block',
  })}
  ${({ className }) => className === 'focus' && ({
    backgroundColor: '#7480FF',
    display: 'block',
  })}
  ${({ className }) => (className === 'validated' || className === 'focus validated' ? ({
    backgroundColor: '#3AA76D',
    display: 'block',
  }) : null)}
`;

export {
  Input,
  InputContainer,
  InputStatusBar,
};
