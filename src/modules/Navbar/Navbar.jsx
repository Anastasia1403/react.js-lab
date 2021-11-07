import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  gap: 24px;
  margin-bottom: 40px;

  @media screen and (min-width: 600px) {
    margin-bottom: 56px;
    gap: 12px;
  }
`;

const NavButton = styled.button`
  padding: 12px 5px;
  border-radius: 8px;
  width: 120px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
`;

function Navbar(props) {
  const white = "#FFF";
  const blue = "#7297FF";
  return (
    <StyledNavbar>
      <NavButton textColor={white} bgColor={blue}>
        Patients
      </NavButton>
      <NavButton textColor={blue} bgColor={white}>
        Resolutions
      </NavButton>
    </StyledNavbar>
  );
}

export default Navbar;
