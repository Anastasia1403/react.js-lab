import React, {
  useState, useMemo, ChangeEventHandler, FocusEventHandler,
} from 'react';
import ShowPasswordIcon from './ShowPasswordIcon/ShowPasswordIcon';
import {
  ErrorMessage,
  IconWrapper,
  StyledInput,
  StyledInputWrapper,
} from './styled';
import inputSettings from './InputSettings';

interface InputProps {
  name: string,
  handleChange: ChangeEventHandler,
  handleBlur: FocusEventHandler,
  value: string,
  error?: string | undefined,
  touched: boolean | undefined,
}

const Input = function ({
  name, handleChange, handleBlur, value, error, touched,
}: InputProps) {
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
        <ErrorMessage data-testid="error">{error}</ErrorMessage>
      )}
    </StyledInputWrapper>
  );
};

export default Input;
