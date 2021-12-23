import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AUTH_PATH, USER_PATH } from 'routes/constants';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import { errorProfileSelector } from 'redux/auth/selectors';
import { appointmentErrorSelector } from 'redux/appointments/selectors';
import { resolutionErrorSelector } from 'redux/resolutions/selectors';
import { logout } from 'redux/auth/slice';
import PlusIcon from './img/plus.svg';
import {
  StyledTabSection, Title, StyledSettingIcon, Button,
} from './styled';

interface TabSectionProps {
  title: string,
  tab: string,
  comp: object,
}

const TabSection = function ({ title, tab, comp }: TabSectionProps) {
  const errorProfile = useAppSelector(errorProfileSelector);
  const appointmentError = useAppSelector(appointmentErrorSelector);
  const resolutionError = useAppSelector(resolutionErrorSelector);

  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect((): void => {
    if (errorProfile || appointmentError || resolutionError) {
      dispatch(logout());
      history.push(AUTH_PATH.SIGN_IN);
    }
  }, [errorProfile, appointmentError, resolutionError]);

  return (
    <StyledTabSection>
      <Title>
        {title}
        {tab === 'Appointments' && (
          <div>
            <Link to={USER_PATH.CREATE_APPOINTMENT}>
              <Button>
                <img src={PlusIcon} alt="plus" />
                <span>Create an appointment</span>
              </Button>
            </Link>

            <StyledSettingIcon />
          </div>
        )}
      </Title>

      {comp}

    </StyledTabSection>
  );
};

export default TabSection;
