import React from 'react';
import { UserView } from 'pages/UserView';
import { NewAppointment } from 'pages/NewAppointment';
import { SignIn } from 'pages/SignIn';
import { SignUp } from 'pages/SignUp';
import { RestorePassword } from 'pages/RestorePassword';
import { AUTH_PATH, USER_PATH } from './constants';

export const publicRoutes = [
  {
    exact: false,
    path: AUTH_PATH.SIGN_IN,
    component: <SignIn />,
  },
  {
    exact: false,
    path: AUTH_PATH.SIGN_UP,
    component: <SignUp />,
  },
  {
    exact: false,
    path: AUTH_PATH.RESTORE_PASSWORD,
    component: <RestorePassword />,
  },
];

export const privateRoutes = [
  {
    exact: false,
    path: USER_PATH.CREATE_APPOINTMENT,
    component: <NewAppointment />,
  },
  {
    exact: false,
    path: USER_PATH.MAIN,
    component: <UserView />,
  },
];
