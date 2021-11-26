import React, { useState } from 'react';
import {
  Route, useRouteMatch, Switch, Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userTabsInfo, doctorTabsInfo } from './tabsInfo';
import { userProfile } from '../redux/getProfile/selectors';
import Navbar from '../modules/Navbar/Navbar';
import TabSection from '../modules/TabSection/TabSection';

const InnerRouter = function () {
  const profile = useSelector(userProfile);

  const match = useRouteMatch();

  const tabsInfo = profile.role_name === 'Doctor' ? doctorTabsInfo : userTabsInfo;
  const defaultTab = tabsInfo[1];
  const [activeTab, setActiveTab] = useState(defaultTab.tab);

  return (
    <>
      <Navbar tabsInfo={tabsInfo} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Switch>
        <Route exact path={`${match.url}`}>
          <Redirect to={`${match.url}${defaultTab.path}`} />
        </Route>
        {tabsInfo.map((item) => (
          <Route
            path={`${match.url}${item.path}`}
            render={() => (
              <TabSection
                title={item.title}
                content={item.tab}
                component={item.component}
              />
            )}
          />
        ))}

      </Switch>

    </>
  );
};

export default InnerRouter;
