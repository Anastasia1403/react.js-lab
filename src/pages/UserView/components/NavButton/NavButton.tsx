import styled from 'styled-components';
import { theme } from 'styles/theme';

interface NavButtonProps {
  active: boolean,
}

const NavButton = styled.button<NavButtonProps>`
  padding: 12px 5px;
  border-radius: 8px;
  width: 120px;
  background-color: ${(props) => (props.active ? theme.colors.blue : theme.colors.white)};
  color: ${(props) => (props.active ? theme.colors.white : theme.colors.blue)};
`;

export default NavButton;
