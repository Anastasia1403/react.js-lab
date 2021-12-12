import { Navbar } from 'pages/UserView/components/Navbar';
import { TabSection } from 'pages/UserView/components/TabSection';
import React, { useState } from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import { userProfile } from 'redux/getProfile/selectors';
import { useAppSelector } from 'redux/hooks/hooks';
import { isLoggedIn } from 'redux/login/selectors';
import { USER_PATH } from './constants';
import PrivateRoute from './PrivateRoute';
import { userTabsInfo, doctorTabsInfo, TabInfo } from './tabsInfo';

const InnerRouter = function () {
  const profile = useAppSelector(userProfile);
  const isLoggedInStatus = useAppSelector(isLoggedIn);
  const tabsInfo = profile?.role_name === 'Doctor' ? doctorTabsInfo : userTabsInfo;
  const defaultTab = tabsInfo[1];
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
