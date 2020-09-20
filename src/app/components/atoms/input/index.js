import React from 'react';
import Input from './style';

export default ({
  value, name, type, onChange, id, placeholder,
}) => (
  <Input
    placeholder={placeholder}
    onChange={onChange}
    type={type}
    name={name}
    id={id}
    value={value}
  />
);
