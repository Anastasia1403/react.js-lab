import styled from 'styled-components';
import { theme } from 'styles/theme';

export const StyledTextarea = styled.textarea`
width: 100%;
height: 56px;
border: 1px solid ${theme.colors.solidGrey};
border-radius: 8px;
padding: 16px 24px;
overflow-y: hidden;
resize: none;
margin-top: 16px;
`;

export const StyledLabel = styled.label`
font-size: 13px;
font-weight: 500px;
color: ${theme.colors.black};
`;

export const StyledSelectDoctor = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
`;
