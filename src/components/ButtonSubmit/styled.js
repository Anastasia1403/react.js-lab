import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  width: fit-content;
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

export default StyledButton;
