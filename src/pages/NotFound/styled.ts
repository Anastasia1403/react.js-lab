import styled from 'styled-components';
import { theme } from 'styles/theme';
import notFound from './img/404.png';

export const Styled404 = styled.div`
width: 100%;
height: 100%;
background-color: ${theme.colors.white};
padding-top: 30vh;
`;

export const StyledImg = styled.div`
margin: auto;
/* max-height: 100%; */
min-height: 200px;
max-width: 41%;
min-width: 200px;
background: url(${notFound}) center / 100%  no-repeat;
`;

export const Text = styled.div`
margin: auto;
color: ${theme.colors.mediumGrey};
font-size: 24px;
margin-top: 50px;
text-align: center;
`;
