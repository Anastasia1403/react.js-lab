import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import avatar from './img/avatar.png';
import MainHeader from '../../modules/MainHeader/MainHeader';
import UserMain from '../../modules/UserMain/UserMain';
import StyledUserView from '../../modules/StyledUserView/StyledUserView';
import doctorTabsInfo from './tabsInfo';
import patients from './patients';

const DoctorView = function () {
  const tabsInfo = doctorTabsInfo;
  const defaultTab = tabsInfo[1];
  const [activeTab, setActiveTab] = useState(defaultTab.tab);

  return (
    <StyledUserView>

      <MainHeader name="Larry Prinston" userRole="Doctor" avatar={avatar} />
      <Switch>
        <Route
          path="/doctor-view"
          render={() => (
            <UserMain
              tabsInfo={tabsInfo}
              dataList={patients}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              defaultTab={defaultTab}
            />
          )}
        />
      </Switch>

    </StyledUserView>
  );
};

export default DoctorView;
