import styled, { css } from 'styled-components';
import { theme } from 'styles/theme';

export const sharedStyleButton = css`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  padding: 12px 16px;
  vertical-align: middle;
  border-radius: 8px;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  transition: 0.2s;
  font-size: 15px;

  &:hover,
  &:active,
  &:focus {
    background-color: rgb(142, 141, 230);
  }

  @media screen and (min-width: 560px) {
    font-size: 17px;
  }  
`;

const StyledButton = styled.button`
${sharedStyleButton};
  height: 56px;
  margin: 0 0 32px;

`;
export const ModalStyledButton = styled.button`
${sharedStyleButton};
  height: 48px;
  font-size: 15px;
`;

export const ModalCancelStyledButton = styled.button`
${sharedStyleButton};
  height: 48px;
  color: ${theme.colors.mediumGrey};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.solidGrey};
  font-size: 15px;


  &:hover,
  &:active,
  &:focus {
    background-color: ${theme.colors.lightGrey};
  }

`;

export default StyledButton;
