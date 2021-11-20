import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import avatar from './img/avatar.png';
import MainHeader from '../../modules/MainHeader/MainHeader';
import UserMain from '../../modules/UserMain/UserMain';
import StyledUserView from '../../modules/StyledUserView/StyledUserView';
import NewAppointment from '../../modules/NewAppointment/NewAppointment';
import userTabsInfo from './tabsInfo';

const UserView = function ({ history }) {
  const tabsInfo = userTabsInfo;
  const defaultTab = tabsInfo[1];
  const [activeTab, setActiveTab] = useState(defaultTab.tab);
  const [appointmentsList, setAppointmentsList] = useState(defaultTab.dataList);

  const match = useRouteMatch();
  const onSubmitNewAppointment = (value) => {
    const appointments = [...appointmentsList];
    appointments.push(value);
    setAppointmentsList(appointments);
  };

  return (
    <StyledUserView>
      <MainHeader name="Larry Prinston" userRole="Patient" avatar={avatar} />
      <Switch>
        <Route
          path={`${match.url}/new-appointment`}
          render={() => (
            <NewAppointment
              history={history}
              onSubmitNewAppointment={onSubmitNewAppointment}
            />
          )}
        />
        <Route
          path={`${match.url}`}
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
