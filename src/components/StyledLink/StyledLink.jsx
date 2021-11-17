import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const sharedStyledLink = css`
     width: fit-content;        
     color:#7297FF ;
`;

const StyledLink = styled(Link)`
${sharedStyledLink}
font-weight: 600;
`;

export const StyledLink17 = styled(Link)`
${sharedStyledLink}
text-decoration: none;
font-size: 17px;
`;
export default StyledLink;
