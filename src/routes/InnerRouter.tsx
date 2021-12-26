import { Navbar } from 'pages/UserView/components/Navbar';
import { TabSection } from 'pages/UserView/components/TabSection';
import React, { useState } from 'react';
import {
  Route, Switch, Redirect,
  useHistory,
} from 'react-router-dom';
import { useAppSelector } from 'redux/hooks/hooks';
import { isLoggedInSelector, profileSelector } from 'redux/auth/selectors';
import { Role } from 'types/role';
import { USER_PATH } from './constants';
import PrivateRoute from './PrivateRoute';
import { patientTabsInfo, doctorTabsInfo, TabInfo } from './tabsInfo';

const getTabInfo = (role_name: Role): any => {
  switch (role_name) {
    case 'Doctor': {
      return doctorTabsInfo;
    }
    case 'Patient': {
      return patientTabsInfo;
    }
    default: return null;
  }
};
const InnerRouter = function () {
  const profile = useAppSelector(profileSelector);
  const isLoggedInStatus = useAppSelector(isLoggedInSelector);
  const tabsInfo = profile ? getTabInfo(profile.role_name) : null;
  const history = useHistory();

  const findCurrentTab = () => {
    const currentTab = tabsInfo.find((item: TabInfo) => item.path === history.location.pathname);
    const defaultTab = tabsInfo.find((item: TabInfo) => item.default === true);
    return currentTab || defaultTab;
  };

  const currentTab = findCurrentTab();
  const [activeTab, setActiveTab] = useState(currentTab.tab);

  return (
    <>
      <Navbar tabsInfo={tabsInfo} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Switch>
        <Redirect from={USER_PATH.MAIN} to={currentTab.path} exact />
        {tabsInfo.map((item: TabInfo) => (
          <PrivateRoute
            key={item.path}
            isLoggedInStatus={isLoggedInStatus}
            {...item}
          >
            <TabSection
              {...item}
            />
          </PrivateRoute>
        ))}
        <Route><Redirect to={currentTab.path} /></Route>

      </Switch>

    </>
  );
};

export default InnerRouter;
