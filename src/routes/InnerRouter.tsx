import { Navbar } from 'pages/UserView/components/Navbar';
import { TabSection } from 'pages/UserView/components/TabSection';
import React, { useState } from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import { userProfile } from 'redux/getProfile/selectors';
import { useAppSelector } from 'redux/hooks/hooks';
import { isLoggedIn } from 'redux/login/selectors';
import { Role } from 'types/role';
import { USER_PATH } from './constants';
import PrivateRoute from './PrivateRoute';
import { userTabsInfo, doctorTabsInfo, TabInfo } from './tabsInfo';

const getTabInfo = (role_name: Role | undefined): any => {
  switch (role_name) {
    case 'Doctor': {
      return doctorTabsInfo;
    }
    case 'Patient': {
      return userTabsInfo;
    }
    default: return null;
  }
};
const InnerRouter = function () {
  const profile = useAppSelector(userProfile);
  const isLoggedInStatus = useAppSelector(isLoggedIn);
  const tabsInfo = getTabInfo(profile?.role_name);
  const defaultTab = tabsInfo.find((item: TabInfo) => item.default === true);
  const [activeTab, setActiveTab] = useState(defaultTab.tab);
  return (
    <>
      <Navbar tabsInfo={tabsInfo} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Switch>
        {/* @ts-ignore */}
        <Route exact path={USER_PATH.MAIN}>
          <Redirect to={defaultTab.path} />
        </Route>
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

      </Switch>

    </>
  );
};

export default InnerRouter;
