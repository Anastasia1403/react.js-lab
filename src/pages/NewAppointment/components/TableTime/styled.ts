import styled from 'styled-components';
import { theme } from 'styles/theme';

interface IRadiobuttonLabel {
  disabled?: boolean,
  blocked?: boolean,
  checked?: boolean,
}

export const StyledTableTime = styled.div<IRadiobuttonLabel>`
width: 100%;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 16px;
pointer-events: ${(props) => (props.blocked ? 'none' : 'auto')};
opacity: ${(props) => (props.blocked ? 0.4 : 1)};;
`;

export const RadiobuttonLabel = styled.label<IRadiobuttonLabel>`
border-radius: 8px;
padding: 8px 16px;
cursor: pointer;
pointer-events: ${(props) => (props.disabled || props.blocked ? 'none' : 'auto')};
font-weight: 600;
background-color: ${(props) => (props.disabled ? theme.colors.solidGrey : theme.colors.white)};
border: ${(props) => {
    if (props.disabled) return `1px solid ${theme.colors.solidGrey};`;
    return props.checked ? `1px solid ${theme.colors.blue}` : `1px solid ${theme.colors.white}`;
  }};
color: ${(props) => {
    if (props.disabled) return theme.colors.lightGrey;
    return props.checked ? theme.colors.blue : theme.colors.black;
  }};
`;

export const Radiobutton = styled.input`
  display: none;
  `;
