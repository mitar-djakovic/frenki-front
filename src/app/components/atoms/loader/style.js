import styled from 'styled-components';

const Loader = styled.div`
  
`;

const LoaderContainer = styled.div`
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }

  .loader {
    border-radius: 50%;
    width: 16px;
    height: 16px;
    border: 0.25rem solid rgba(255, 255, 255, 0.2);
    border-top-color: white;
    -webkit-animation: spin 1s infinite linear;
            animation: spin 1s infinite linear;
  }
`;

export {
  Loader,
  LoaderContainer,
};
