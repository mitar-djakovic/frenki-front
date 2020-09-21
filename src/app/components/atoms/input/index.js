import React, { useState } from 'react';
import classNames from 'classnames';
import { Input, InputContainer, InputStatusBar } from './style';

export default ({
  value, name, type, onChange, id, placeholder, error,
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <InputContainer>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        name={name}
        id={id}
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={classNames({ focus: focus && !error, error, validated: value && !error })}
      />
      <InputStatusBar className={classNames({ focus: focus && !error, error, validated: value && !error })} />
    </InputContainer>
  );
};
