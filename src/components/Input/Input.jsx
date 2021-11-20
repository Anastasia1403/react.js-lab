import React, { useState, useMemo } from 'react';
import ShowPasswordIcon from './ShowPasswordIcon/ShowPasswordIcon';
import {
  ErrorMessage,
  IconWrapper,
  StyledInput,
  StyledInputWrapper,
} from './InputStyle';
import inputSettings from './InputSettings';

const Input = function ({
  name, handleChange, handleBlur, value, error, touched,
}) {
  const [isPasswordVisible, setPasswordDisplay] = useState(false);

  const isPasswordField = (name === 'password' || name === 'confirmPassword');

  const type = useMemo(() => {
    if (isPasswordField) {
      return (isPasswordVisible ? 'text' : 'password');
    }
    if (name === 'email') return 'email';
    return 'text';
  }, [name, isPasswordVisible]);

  const onToggle = () => {
    setPasswordDisplay(!isPasswordVisible);
  };

  const svg = inputSettings[name].img;

  const { placeholder } = inputSettings[name];

  return (
    <StyledInputWrapper>
      <IconWrapper>
        {svg}
      </IconWrapper>

      <StyledInput
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        error={error}
        touched={touched}
      />

      {(isPasswordField)
        && (
        <ShowPasswordIcon
          onToggle={onToggle}
          isPasswordVisible={isPasswordVisible}
        />
        )}
      {(touched && error) && (
        <ErrorMessage>{error}</ErrorMessage>
      )}
    </StyledInputWrapper>
  );
};

export default Input;
