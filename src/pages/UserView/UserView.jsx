import React from 'react';
import logo from './img/palm-clinic-logo.png';
// import Navbar from '../../modules/Navbar/Navbar';
// import NavButton from '../../modules/NavButton/NavButton';
import appointments from './appointments';
import UserInfo from '../../modules/UserInfo/UserInfo';
import avatar from './img/avatar.png';
// import TabSection from '../../modules/TabSection/TabSection';
import MainHeader from '../../modules/MainHeader/MainHeader';
import UserMain from '../../modules/UserMain/UserMain';
import StyledUserView from '../../modules/StyledUserView/StyledUserView';

const userTabsInfo = [
  {
    tab: 'Profile',
    title: 'My Profile',
    dataList: {},
  },
  {
    tab: 'Appointments',
    title: 'My Appointments',
    dataList: appointments,
  },
  {
    tab: 'Resolutions',
    title: 'My Resolutions',
    dataList: {},
  },
];

const UserView = function () {
  return (
    <StyledUserView>
      <MainHeader>
        <a href="#!">
          <img src={logo} alt="palm clinic logo" />
        </a>
        <UserInfo name="Larry Prinston" userRole="Patient" avatar={avatar} />

      </MainHeader>

      <UserMain tabsInfo={userTabsInfo} defaultTabActive="Appointments" />
    </StyledUserView>
  );
};

export default UserView;
