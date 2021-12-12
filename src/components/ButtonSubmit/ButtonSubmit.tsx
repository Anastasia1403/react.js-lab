import React from 'react';
import StyledButton from './styled';

interface ButtonSubmitProps {
  children: React.ReactNode;
  type?:'button' | 'submit' | 'reset' | undefined
}
const ButtonSubmit = function ({ children, type }: ButtonSubmitProps) {
  return (
    <StyledButton data-testid="submit" type={type}>
      {children}
    </StyledButton>
  );
};

export default ButtonSubmit;
