import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { userProfile, userProfileLoading } from 'redux/getProfile/selectors';
import getProfile from 'redux/getProfile/thunk';
// import { isLoggedIn } from 'redux/login/selectors';
import { LoadingBlock, MainHeader, StyledUserView } from 'components';
// import InnerRouter from 'routes/InnerRouter';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import InnerRouter from 'routes/InnerRouter';
import StyledUserMain from './styled';

const UserView = function () {
  const profile = useAppSelector(userProfile);
  const isProfileLoading = useAppSelector(userProfileLoading);
  // const isLoggedInStatus = useAppSelector(isLoggedIn);

  const dispatch = useAppDispatch();
  // const history = useHistory();

  useEffect(() => {
  //   if (!isLoggedInStatus) {
  //     history.push('/sign-up');
  //     // } else if (!Object.keys(profile).length) {
  //   } else if
    if (!profile) {
      dispatch(getProfile());
    }
  }, []);

  return (
    <div>
      {isProfileLoading
        ? <LoadingBlock />
        : (
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
        )}
    </div>

  );
};

export default UserView;
