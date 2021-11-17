import styled from 'styled-components';

export const StyledMain = styled.main`
border-radius: 16px 16px 0px 0px;
background-color: #f9faff;
padding: 40px 24px 0;
display: flex;
flex-direction: column;

@media screen and (min-width: 600px) {
  border-radius: 16px;
  padding: 40px 48px 24px 48px;
}
`;

export const StyledNav = styled.nav`
display: flex;
gap: 8px;
font-size: 17px;
`;

export const Stage = styled.h3`
color: #A1ABC9;
font-size: 17px;
margin-bottom: 40px;
`;
