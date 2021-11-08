import React from "react";
import eyeCrossed from "../img/eye-crossed-out.svg";
import eye from "../img/eye.svg";
import styled from "styled-components";

const StyledToggler = styled.button`
  background: transparent;
  position: absolute;
  width: 24px;
  height: 24px;
  right: 16px;
  top: 8px;

  @media screen and (min-width: 560px) {
    right: 24px;
    top: 16px;
  }
`;

function DisplayPasswordToggler(props) {
  const icon = props.passwordDisplay ? eyeCrossed : eye;
  const toggler = (event) => {
    event.preventDefault();
    props.togglerPassword();
  };
  return (
    <StyledToggler onClick={toggler}>
      <img src={icon} alt={props.name}/>
    </StyledToggler>
  );
}

export default DisplayPasswordToggler;
