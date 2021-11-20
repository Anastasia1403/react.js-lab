import React from 'react';
import StyledButton from './styled';

const ButtonSubmit = function ({ margin, children }) {
  return (
    <StyledButton margin={margin}>
      {children}
    </StyledButton>
  );
};

export default ButtonSubmit;
