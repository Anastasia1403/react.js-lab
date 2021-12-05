import React from 'react';
import StyledButton from './styled';

const ButtonSubmit = function ({ margin, children }) {
  return (
    <StyledButton margin={margin} data-testid="submit">
      {children}
    </StyledButton>
  );
};

export default ButtonSubmit;
