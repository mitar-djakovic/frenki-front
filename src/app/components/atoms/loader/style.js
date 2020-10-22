import styled from 'styled-components';

const Loader = styled.div`
  
`;

const LoaderContainer = styled.div`
  @-webkit-keyframes pulse {
    50% {
      background: white;
    }
  }
  @keyframes pulse {
    50% {
      background: white;
    }
  }
  margin: 0 auto;

  .loading-pulse {
    position: relative;
    width: 4px;
    height: 22px;
    background: rgba(255, 255, 255, 0.2);
    -webkit-animation: pulse 750ms infinite;
            animation: pulse 750ms infinite;
    -webkit-animation-delay: 250ms;
            animation-delay: 250ms;
  }
  .loading-pulse:before, .loading-pulse:after {
    content: '';
    position: absolute;
    display: block;
    height: 16px;
    width: 4px;
    background: rgba(255, 255, 255, 0.2);
    top: 50%;
    -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    -webkit-animation: pulse 750ms infinite;
      animation: pulse 750ms infinite;
  }
  .loading-pulse:before {
    left: -12px;
  }
  .loading-pulse:after {
    left: 12px;
    -webkit-animation-delay: 500ms;
      animation-delay: 500ms;
  }
`;

export {
  Loader,
  LoaderContainer,
};
