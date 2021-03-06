import React from 'react';
import { useAppDispatch } from 'redux/hooks/hooks';
import { hideNotification } from 'redux/notifications/slice';
import {
  CloseButton,
  NotificationContent, NotificationText, NotificationTitle, StyledNotification,
} from './styled';
import { ReactComponent as SuccessIcon } from './img/success.svg';
import { ReactComponent as AlertIcon } from './img/alert.svg';
import { ReactComponent as CloseIcon } from './img/close.svg';

export interface NotificationProps {
  type: 'error' | 'success' | null,
  text: string | null,
  isVisible: boolean
}

const Notification = function ({ type, text, isVisible }: NotificationProps) {
  const dispatch = useAppDispatch();
  return (
    <StyledNotification type={type} isVisible={isVisible}>
      {type === 'success' ? <SuccessIcon /> : <AlertIcon />}
      <NotificationContent>
        <NotificationTitle>{type === 'success' ? 'OK' : 'Error'}</NotificationTitle>
        <NotificationText>{text}</NotificationText>
      </NotificationContent>
      <CloseButton onClick={() => dispatch(hideNotification())}><CloseIcon /></CloseButton>
    </StyledNotification>
  );
};

export default Notification;
