import React from 'react';
import { useSelector } from 'react-redux';
import Title from '../../components/Title/Title';
import {
  Step, StyledLink, StyledMain, StyledNav,
} from './styled';
import { ReactComponent as ArrowIcon } from './img/angle-right-b.svg';

import { userProfile } from '../../redux/getProfile/selectors';
import StyledUserView from '../../modules/StyledUserView/StyledUserView';
import MainHeader from '../../modules/MainHeader/MainHeader';
import NewAppointmentForm from '../../modules/NewAppointmentForm/NewAppointmentForm';

const NewAppointment = function ({ history }) {
  const profile = useSelector(userProfile);

  return (
    <StyledUserView>
      <MainHeader name={`${profile.first_name} ${profile.last_name}`} userRole={profile.role_name} avatar={profile.photo} />
      <StyledMain>
        <StyledNav>
          <StyledLink to="/user-view/appointments">Doctors</StyledLink>
          <ArrowIcon alt="arrow" />
          <Step>Make an appointment</Step>

        </StyledNav>
        <Title>Make an appointment</Title>
        <NewAppointmentForm
          history={history}
        />

      </StyledMain>
    </StyledUserView>

  );
};

export default NewAppointment;
