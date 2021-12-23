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
    comp: <SignIn />,
  },
  {
    exact: false,
    path: AUTH_PATH.SIGN_UP,
    comp: <SignUp />,
  },
  {
    exact: false,
    path: AUTH_PATH.RESTORE_PASSWORD,
    comp: <RestorePassword />,
  },
];

export const privateRoutes = [
  {
    exact: false,
    path: USER_PATH.CREATE_APPOINTMENT,
    comp: <NewAppointment />,
  },
  {
    exact: false,
    path: USER_PATH.MAIN,
    comp: <UserView />,
  },
];
