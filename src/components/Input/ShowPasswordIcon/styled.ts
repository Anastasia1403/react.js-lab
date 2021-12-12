import styled from 'styled-components';

const StyledToggler = styled.button`
background: transparent;
position: absolute;
width: 24px;
height: 24px;
right: 16px;
top: 8px;

@media screen and (min-width: 560px) {
  right: 24px;
  top: 16px;
}
`;
export default StyledToggler;
