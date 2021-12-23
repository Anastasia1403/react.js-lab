import { IDropDownItem } from 'components/Card/types';
import React from 'react';
import { DropDownItem, StyledDropDown } from './styled';

export interface DropDownProps {
  content: IDropDownItem[],
  isVisible: boolean,

}

const DropDown = function ({
  content, isVisible,
}: DropDownProps) {
  return (
    <StyledDropDown isVisible={isVisible}>
      {content.map((item) => (
        <DropDownItem
          isActive={item.isActive}
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
