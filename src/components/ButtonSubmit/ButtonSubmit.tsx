import React from 'react';
import StyledButton from './styled';

interface ButtonSubmitProps {
  type?:'button' | 'submit' | 'reset'
}
const ButtonSubmit:React.FC<ButtonSubmitProps> = function ({ children, type }) {
  return (
    <StyledButton data-testid="submit" type={type}>
      {children}
    </StyledButton>
  );
};

export default ButtonSubmit;
