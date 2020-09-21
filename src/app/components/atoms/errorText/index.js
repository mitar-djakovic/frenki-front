import React from 'react';
import { ErrorText } from './style';

export default ({ error }) => (
  <ErrorText className="error-active">{error}</ErrorText>
);
