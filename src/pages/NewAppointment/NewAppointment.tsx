import React, { useEffect } from 'react';
import { NewAppointmentForm } from 'pages/NewAppointment/components/NewAppointmentForm';
import getProfile from 'redux/auth/loadProfile.thunk';
import { MainHeader, StyledUserView, Title } from 'components';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import { USER_PATH } from 'routes/constants';
import { profileSelector } from 'redux/auth/selectors';
import { ReactComponent as ArrowIcon } from './img/angle-right-b.svg';
import {
  Step, StyledLink, StyledMain, StyledNav,
} from './styled';

const NewAppointment = function () {
  const profile = useAppSelector(profileSelector);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!profile) {
      dispatch(getProfile());
    }
  }, []);
  return (
    <StyledUserView>
      {profile && <MainHeader name={`${profile.first_name} ${profile.last_name}`} userRole={profile.role_name} avatar={profile.photo} />}
      <StyledMain>
        <StyledNav>
          <StyledLink to={USER_PATH.APPOINTMENTS}>Doctors</StyledLink>
          <ArrowIcon />
          <Step>Make an appointment</Step>

        </StyledNav>
        <Title>Make an appointment</Title>
        <NewAppointmentForm />

      </StyledMain>
    </StyledUserView>

  );
};

export default NewAppointment;
