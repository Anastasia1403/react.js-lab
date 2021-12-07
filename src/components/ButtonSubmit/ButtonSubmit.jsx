import React from 'react';
import StyledButton from './styled';

const ButtonSubmit = function ({ children }) {
  return (
    <StyledButton data-testid="submit">
      {children}
    </StyledButton>
  );
};

export default ButtonSubmit;
