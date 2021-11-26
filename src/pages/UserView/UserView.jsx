import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainHeader from '../../modules/MainHeader/MainHeader';
import StyledUserView from '../../modules/StyledUserView/StyledUserView';
import { userProfile, userProfileLoading } from '../../redux/getProfile/selectors';
import { getProfile } from '../../redux/getProfile/slice';
import InnerRouter from '../../routes/InnerRouter';

import StyledUserMain from './styled';

const UserView = function () {
  const profile = useSelector(userProfile);
  const isProfileLoading = useSelector(userProfileLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <div>
      {isProfileLoading
        ? <div>Loading</div>
        : (
          <StyledUserView>
            <MainHeader name={`${profile.first_name} ${profile.last_name}`} userRole={profile.role_name} avatar={profile.photo} />
            <StyledUserMain>
              <InnerRouter />
            </StyledUserMain>
          </StyledUserView>
        )}
    </div>

  );
};

export default UserView;
