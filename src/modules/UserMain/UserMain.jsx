import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import TabSection from '../TabSection/TabSection';
import StyledUserMain from './styled';

const UserMain = function ({
  tabsInfo, dataList, activeTab, setActiveTab, defaultTab,
}) {
  return (
    <StyledUserMain>

      <Navbar tabsInfo={tabsInfo} activeTab={activeTab} setActiveTab={setActiveTab} />

      <Switch>
        <Route exact path="/user-view">
          <Redirect to={`/user-view${defaultTab.path}`} />
        </Route>

        {tabsInfo.map((item) => (
          <Route
            path={`/user-view${item.path}`}
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
