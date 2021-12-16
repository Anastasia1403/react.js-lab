import React, { useEffect } from 'react';
import { userProfile, userProfileLoading } from 'redux/getProfile/selectors';
import getProfile from 'redux/getProfile/thunk';
import { LoadingBlock, MainHeader, StyledUserView } from 'components';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import InnerRouter from 'routes/InnerRouter';
import StyledUserMain from './styled';

const UserView = function () {
  const profile = useAppSelector(userProfile);
  const isProfileLoading = useAppSelector(userProfileLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!profile) {
      dispatch(getProfile());
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
