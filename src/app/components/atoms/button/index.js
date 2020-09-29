import React from 'react';
import Button from './style';

export default ({ type, text, onClick }) => (
  <Button onClick={onClick} type={type}>{text}</Button>
);
