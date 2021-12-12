import styled from 'styled-components';

const white = '#FFF';
const blue = '#7297FF';

interface NavButtonProps {
  active: boolean,
}

const NavButton = styled.button<NavButtonProps>`
  padding: 12px 5px;
  border-radius: 8px;
  width: 120px;
  background-color: ${(props) => (props.active ? blue : white)};
  color: ${(props) => (props.active ? white : blue)};
`;

export default NavButton;
