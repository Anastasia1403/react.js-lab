import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MainHeader from 'modules/MainHeader/MainHeader';
import StyledUserView from 'modules/StyledUserView/StyledUserView';
import { userProfile, userProfileLoading } from 'redux/getProfile/selectors';
import getProfile from 'redux/getProfile/thunk';
import { isLoggedIn } from 'redux/login/selectors';

import { LoadingBlock } from 'components';
import InnerRouter from 'routes/InnerRouter';
import StyledUserMain from './styled';

const UserView = function () {
  const profile = useSelector(userProfile);
  const isProfileLoading = useSelector(userProfileLoading);
  const isLoggedInStatus = useSelector(isLoggedIn);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!isLoggedInStatus) {
      history.push('/sign-up');
    } else if (!Object.keys(profile).length) {
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
              name={`${profile.first_name} ${profile.last_name}`}
              userRole={profile.role_name}
              avatar={profile.photo}
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
