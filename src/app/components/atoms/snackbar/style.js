import styled from 'styled-components';

const Snackbar = styled.div`
  display: inline-block;
  margin-top: 16px;
  border: none;
  background: ${({ error }) => (error ? '#E2164B' : '#3AA76D')};
  border-radius: 4px;
  padding: 8px 24px;
  color: #FFF;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  position: absolute;
  visibility: hidden;
  bottom: -60px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }

  &.snackbarActive {
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2s;
    animation: fadein 0.5s, fadeout 0.5s 2s;
    visibility: visible !important;
  }

  @-webkit-keyframes fadein {
    from { bottom: -90px; opacity: 0; }
    to { bottom: -60px; opacity: 1; }
  }

  @keyframes fadein {
    from { bottom: -90px; opacity: 0; }
    to { bottom: -60px; opacity: 1; }
  }

  @-webkit-keyframes fadeout {
    from { bottom: -60px; opacity: 1; }
    to { bottom: -90px; opacity: 0; }
  }

  @keyframes fadeout {
    from { bottom: -60px; opacity: 1; }
    to { bottom: -90px; opacity: 0; }
  }
`;

export {
  Snackbar,
};
