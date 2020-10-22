import React from 'react';
import Button from './style';
import Loader from '../loader';

export default ({
  type, text, onClick, loading, disabled,
}) => (
  <Button onClick={onClick} type={type} disabled={disabled}>
    {loading ? <Loader /> : text}
  </Button>
);
