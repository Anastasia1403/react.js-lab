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
${sharedStyleButton};
  height: 56px;
`;

export default StyledButton;
