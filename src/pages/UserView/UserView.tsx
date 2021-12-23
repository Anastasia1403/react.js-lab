import React, { useEffect } from 'react';
import { LoadingBlock, MainHeader, StyledUserView } from 'components';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import InnerRouter from 'routes/InnerRouter';
import { useHistory } from 'react-router-dom';
import { AUTH_PATH } from 'routes/constants';
import { appointmentErrorSelector } from 'redux/appointments/selectors';
import { resolutionErrorSelector } from 'redux/resolutions/selectors';
import { logout } from 'redux/auth/slice';
import { errorProfileSelector, profileLoadingSelector, profileSelector } from 'redux/auth/selectors';
import loadProfile from 'redux/auth/loadProfile.thunk';
import StyledUserMain from './styled';

const UserView = function () {
  const profile = useAppSelector(profileSelector);
  const isProfileLoading = useAppSelector(profileLoadingSelector);
  const errorProfile = useAppSelector(errorProfileSelector);
  const appointmentError = useAppSelector(appointmentErrorSelector);
  const resolutionError = useAppSelector(resolutionErrorSelector);

  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect((): void => {
    if (errorProfile || appointmentError || resolutionError) {
      dispatch(logout());
      localStorage.clear();
      history.push(AUTH_PATH.SIGN_IN);
    }
  }, [errorProfile, appointmentError, resolutionError]);

  useEffect((): void => {
    if (!profile) {
      dispatch(loadProfile());
    }
  }, []);

  return (
    <div>
      {!isProfileLoading && profile
        ? (
          <StyledUserView>
            <MainHeader
              name={`${profile?.first_name} ${profile?.last_name}`}
              userRole={profile?.role_name}
              avatar={profile?.photo}
            />
            <StyledUserMain>
              <InnerRouter />
            </StyledUserMain>
          </StyledUserView>
        ) : <LoadingBlock />}
    </div>

  );
};

export default UserView;
