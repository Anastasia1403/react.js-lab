import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import avatar from './img/avatar.png';
import MainHeader from '../../modules/MainHeader/MainHeader';
import UserMain from '../../modules/UserMain/UserMain';
import StyledUserView from '../../modules/StyledUserView/StyledUserView';
import NewAppointment from '../../modules/NewAppointment/NewAppointment';
import { userTabsInfo } from './tabsInfo';

const UserView = function ({ history }) {
  const tabsInfo = userTabsInfo;
  const defaultTab = tabsInfo[1];
  const [activeTab, setActiveTab] = useState(defaultTab.tab);
  const [appointmentsList, setAppointmentsList] = useState(defaultTab.dataList);

  return (
    <StyledUserView>
      <MainHeader name="Larry Prinston" userRole="Patient" avatar={avatar} />
      <Switch>
        <Route
          path="/user-view/new-appointment"
          render={() => (
            <NewAppointment
              history={history}
              setAppointmentsList={setAppointmentsList}
              appointmentsList={appointmentsList}
            />
          )}
        />
        <Route
          path="/user-view"
          render={() => (
            <UserMain
              tabsInfo={tabsInfo}
              dataList={appointmentsList}
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

export default UserView;
