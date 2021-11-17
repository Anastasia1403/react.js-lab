import React from 'react';
import logo from './img/palm-clinic-logo.png';
import patients from './patients';
import UserInfo from '../../modules/UserInfo/UserInfo';
import avatar from './img/avatar.png';
import MainHeader from '../../modules/MainHeader/MainHeader';
import UserMain from '../../modules/UserMain/UserMain';
import StyledUserView from '../../modules/StyledUserView/StyledUserView';

const doctorTabsInfo = [
  {
    tab: 'Patients',
    title: 'My Patients',
    dataList: patients,
  },
  {
    tab: 'Resolutions',
    title: 'My Resolutions',
    dataList: {},
  },
];

const DoctorView = function () {
  return (
    <StyledUserView>
      <MainHeader>
        <a href="#!">
          <img src={logo} alt="palm clinic logo" />
        </a>
        <UserInfo name="Miranda Nelson" userRole="Doctor" avatar={avatar} />
      </MainHeader>

      <UserMain tabsInfo={doctorTabsInfo} defaultTabActive="Patients" />

    </StyledUserView>
  );
};

export default DoctorView;
