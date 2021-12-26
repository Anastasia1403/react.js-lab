import { IDropDownItem } from 'components/Card/types';
import React from 'react';
import { DropDownItem, StyledDropDown } from './styled';

export interface DropDownProps {
  content: IDropDownItem[],
  isVisible: boolean,
  className?: string

}

const DropDown = function ({
  content, isVisible, className,
}: DropDownProps) {
  return (

    <StyledDropDown isVisible={isVisible} className={className}>
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
