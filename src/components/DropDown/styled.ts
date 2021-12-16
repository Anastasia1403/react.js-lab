import styled from 'styled-components';
import { DropDownProps } from './DropDown';

export const StyledDropDown = styled.div<DropDownProps>`
 display: ${(props) => (props.isVisible ? 'flex' : 'none')};
 flex-direction: column;
 padding: 4px;
 position: absolute;
 top: 72px;
 right: 16px;
 border-radius: 8px;
 filter: drop-shadow(0px 4px 40px rgba(118, 136, 187, 0.16));
background-color: #fff;
z-index: 2;
width: 272px;

`;
