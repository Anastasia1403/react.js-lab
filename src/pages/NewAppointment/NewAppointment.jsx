import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userProfile } from 'redux/getProfile/selectors';
import StyledUserView from 'modules/StyledUserView/StyledUserView';
import MainHeader from 'modules/MainHeader/MainHeader';
import NewAppointmentForm from 'modules/NewAppointmentForm/NewAppointmentForm';
import getProfile from 'redux/getProfile/thunk';
import { Title } from 'components';
import { ReactComponent as ArrowIcon } from './img/angle-right-b.svg';
import {
  Step, StyledLink, StyledMain, StyledNav,
} from './styled';

const NewAppointment = function () {
  const profile = useSelector(userProfile);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!Object.keys(profile).length) {
      dispatch(getProfile());
    }
  }, []);
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
        <NewAppointmentForm />

      </StyledMain>
    </StyledUserView>

  );
};

export default NewAppointment;
