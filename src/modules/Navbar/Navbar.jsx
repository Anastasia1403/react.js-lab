import NavButton from 'modules/NavButton/NavButton';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  gap: 24px;
  margin-bottom: 40px;

  @media screen and (min-width: 600px) {
    margin-bottom: 56px;
    gap: 12px;
  }
`;

const Navbar = function ({ tabsInfo, activeTab, setActiveTab }) {
  const match = useRouteMatch();

  return (
    <StyledNavbar>
      {tabsInfo.map((item) => (
        <Link to={`${match.url}${item.path}`}>
          <NavButton active={activeTab === item.tab} onClick={() => setActiveTab(item.tab)}>
            {item.tab}
          </NavButton>
        </Link>

      ))}
    </StyledNavbar>
  );
};

export default Navbar;
