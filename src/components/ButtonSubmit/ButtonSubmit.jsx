import React from "react";
import arrow from "./img/angle-right-b.svg";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  width: fit-content;
  margin-top: 8px;
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

function ButtonSubmit(props) {
  return (
    <StyledButton className="submit">
      <span>{props.text}</span>
      <img src={arrow} alt="arrow" className="icon" />
    </StyledButton>
  );
}

export default ButtonSubmit;
