import Notification from 'components/Notification/Notification';
import React from 'react';
import { useAppSelector } from 'redux/hooks/hooks';
import { isVisible, text, type } from 'redux/showNotification/selectors';
import { MainRouter } from 'routes';

const App = function () {
  const notificationType = useAppSelector(type);
  const notificationText = useAppSelector(text);
  const isNotificationVisible = useAppSelector(isVisible);

  return (
    <>
      <MainRouter />
      <Notification
        type={notificationType}
        text={notificationText}
        isVisible={isNotificationVisible}
      />
    </>
  );
};

export default App;
