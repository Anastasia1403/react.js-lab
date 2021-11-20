import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const sharedStyledLink = css`
     width: fit-content;        
     color:#7297FF ;
`;

const StyledLink = styled(Link)`
${sharedStyledLink}
font-weight: 600;
`;

export default StyledLink;
