import React from 'react';
import { StyledDropDown } from './styled';

export interface DropDownProps {
  children?: any[],
  isVisible: boolean
}

const DropDown = function ({ children, isVisible }: DropDownProps) {
  return (
    <StyledDropDown isVisible={isVisible}>
      {children}
    </StyledDropDown>
  );
};

export default DropDown;
