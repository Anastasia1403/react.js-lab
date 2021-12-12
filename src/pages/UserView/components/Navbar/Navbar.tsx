import React from 'react';
import { Link } from 'react-router-dom';
import { TabInfo } from 'routes/tabsInfo';
import { NavButton } from '../NavButton';
import StyledNavbar from './styled';

interface ITabInfo {
  tabsInfo: TabInfo[],
  activeTab: string,
  setActiveTab: (tab: string) => void,
}

const Navbar = function ({ tabsInfo, activeTab, setActiveTab }: ITabInfo) {
  return (
    <StyledNavbar>
      {tabsInfo.map((item) => (
        <Link to={item.path} key={item.tab}>
          <NavButton active={activeTab === item.tab} onClick={() => setActiveTab(item.tab)}>
            {item.tab}
          </NavButton>
        </Link>

      ))}
    </StyledNavbar>
  );
};

export default Navbar;
