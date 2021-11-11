import React from 'react';
import logo from './img/palm-clinic-logo.png';
import Navbar from '../../modules/Navbar/Navbar';
import NavButton from '../../modules/NavButton/NavButton';
import patients from './patients';
import UserInfo from '../../modules/UserInfo/UserInfo';
import avatar from './img/avatar.png';
import TabSection from '../../modules/TabSection/TabSection';
import MainHeader from '../../modules/MainHeader/MainHeader';
import UserMain from '../../modules/UserMain/UserMain';
import StyledUserView from '../../modules/StyledUserView/StyledUserView';

const DoctorView = function () {
  return (
    <StyledUserView>
      <MainHeader>
        <a href="#!">
          <img src={logo} alt="palm clinic logo" />
        </a>
        <UserInfo name="Miranda Nelson" userRole="Doctor" avatar={avatar} />
      </MainHeader>

      <UserMain>
        <Navbar>
          <NavButton active>
            Patients
          </NavButton>
          <NavButton>
            Resolutions
          </NavButton>
        </Navbar>

        <TabSection title="My patients" dataList={patients} content="patients" />

      </UserMain>
    </StyledUserView>
  );
};

export default DoctorView;
