import styled, { css } from 'styled-components';

export const sharedStyleButton = css`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  width: fit-content;
  height: fit-content;
  padding: 12px 16px;
  vertical-align: middle;
  border-radius: 8px;
  background-color: #7297ff;
  color: #ffffff;
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
${sharedStyleButton}`;

export const ButtonNew = styled.button`
  ${sharedStyleButton}
  display: none;
  @media screen and (min-width: 900px) {
  display: flex;    
  }
`;

export const GridButton = styled.button`
  ${sharedStyleButton}
  justify-self: end;
  align-self: flex-end;
  &:disabled {
    background: #DCE0EC;
  }
  
  @media screen and (min-width: 1500px) {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }

`;

export default StyledButton;
