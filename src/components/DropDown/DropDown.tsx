import { Item } from 'components/Card/dropDownInfo';
import React from 'react';
import { DropDownItem, StyledDropDown } from './styled';

export interface DropDownProps {
  content: Item[],
  isVisible: boolean
}

const DropDown = function ({ content, isVisible }: DropDownProps) {
  return (
    <StyledDropDown isVisible={isVisible}>
      {content.map((item) => (
        <DropDownItem
          key={item.name}
          onClick={item.callback}
        >
          {item.name}
        </DropDownItem>
      ))}
    </StyledDropDown>
  );
};

export default DropDown;
