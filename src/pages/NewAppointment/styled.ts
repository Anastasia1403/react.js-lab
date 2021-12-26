import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { sharedStyledLink } from 'components/StyledLink/StyledLink';

export const StyledMain = styled.main`
border-radius: 16px 16px 0px 0px;
background-color: ${theme.colors.lightGrey};
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

export const Step = styled.p`
color: ${theme.colors.mediumGrey};
font-size: 17px;
margin-bottom: 40px;
`;

export const StyledLink = styled(Link)`
${sharedStyledLink}
text-decoration: none;
font-size: 17px;
`;
