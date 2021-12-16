import styled from 'styled-components';
import notFound from './img/404.png';

export const Styled404 = styled.div`
width: 100%;
height: 100%;
background-color: #fff;
padding-top: 30vh;
`;

export const StyledImg = styled.div`
margin: auto;
height: 41%;
max-width: 41%;
min-width: 200px;
background: url(${notFound}) center / 100%  no-repeat;
`;

export const Text = styled.div`
margin: auto;
color: #A1ABC9;
font-size: 24px;
margin-top: 50px;
text-align: center;
`;
