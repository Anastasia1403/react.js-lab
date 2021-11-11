import React from 'react';
import logo from './img/palm-clinic-logo.png';
import Navbar from '../../modules/Navbar/Navbar';
import NavButton from '../../modules/NavButton/NavButton';
import appointments from './appointments';
import UserInfo from '../../modules/UserInfo/UserInfo';
import avatar from './img/avatar.png';
import TabSection from '../../modules/TabSection/TabSection';
import MainHeader from '../../modules/MainHeader/MainHeader';
import UserMain from '../../modules/UserMain/UserMain';
import StyledUserView from '../../modules/StyledUserView/StyledUserView';

const UserView = function () {
  return (
    <StyledUserView>
      <MainHeader>
        <a href="#!">
          <img src={logo} alt="palm clinic logo" />
        </a>
        <UserInfo name="Larry Prinston" userRole="Patient" avatar={avatar} />

      </MainHeader>

      <UserMain>
        <Navbar>
          <NavButton>
            Profile
          </NavButton>
          <NavButton active>
            Appointments
          </NavButton>
          <NavButton>
            Resolutions
          </NavButton>
        </Navbar>

        <TabSection title="My Appountments" dataList={appointments} content="appointments" />
      </UserMain>
    </StyledUserView>
  );
};

export default UserView;
