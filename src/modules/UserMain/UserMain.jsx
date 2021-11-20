import React from 'react';
import {
  Route, Switch, Redirect, useRouteMatch,
} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import TabSection from '../TabSection/TabSection';
import StyledUserMain from './styled';

const UserMain = function ({
  tabsInfo, dataList, activeTab, setActiveTab, defaultTab,
}) {
  const match = useRouteMatch();

  return (
    <StyledUserMain>

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
                dataList={dataList}
              />
            )}
          />
        ))}
      </Switch>
    </StyledUserMain>
  );
};

export default UserMain;
