import styled from 'styled-components';
import { IDropDownItem } from 'components/Card/types';
import { theme } from 'styles/theme';
import { DropDownProps } from './DropDown';

export const StyledDropDown = styled.ul<Pick<DropDownProps, 'isVisible'>>`
 display: ${(props) => (props.isVisible ? 'flex' : 'none')};
 flex-direction: column;
 padding: 4px;
 position: absolute;
 border-radius: 8px;
 filter: drop-shadow(0px 4px 40px rgba(118, 136, 187, 0.16));
background-color: ${theme.colors.white};
z-index: 2;
width: 272px;
`;

export const DropDownItem = styled.li<Pick<IDropDownItem, 'isActive'>>`
pointer-events: ${(props) => (props.isActive ? 'auto' : 'none')};
color: ${(props) => (props.isActive ? 'inherit' : theme.colors.mediumGrey)};
    background-color: transparent;
    cursor: pointer;
    height: 40px;
    padding: 0 20px;
    border-radius: 6px;
    text-align: start;
    line-height: 40px;
    vertical-align: middle;
    &:hover, &:active, &:focus {
    background-color: ${theme.colors.lightGrey};

}
`;
