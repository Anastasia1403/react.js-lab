import styled from 'styled-components';
import { theme } from 'styles/theme';
import med from './img/medical-history.svg';

export const StyledEmptyBlock = styled.div`
width: 100%;
height: 100%;
padding-top: 20vh;
`;

export const EmptyBlockImg = styled.div`
margin: auto;
height: 120px;
width: 120px;
background: url(${med}) center / 100%  no-repeat;
`;

export const EmptyBlockText = styled.div`
color: ${theme.colors.mediumGrey};
font-size: 15px;
text-align: center;

`;
