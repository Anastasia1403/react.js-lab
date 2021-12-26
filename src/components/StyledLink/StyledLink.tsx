import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { theme } from 'styles/theme';

export const sharedStyledLink = css`
     width: fit-content;        
     color: ${theme.colors.blue} ;
`;

const StyledLink = styled(Link)`
${sharedStyledLink}
font-weight: 600;

`;

export default StyledLink;
