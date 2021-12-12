import React from 'react';
import { LoadingBlock } from 'components';
import { AppointmentsList } from 'pages/UserView/components/AppointmentsList';
import { PatientsList } from 'pages/UserView/components/PatientsList';
import { USER_PATH } from './constants';

export interface TabInfo {
  tab: string,
  title: string,
  path: string,
  component: object,
  exact?: boolean
}

export const userTabsInfo: Array<TabInfo> = [
  {
    tab: 'Profile',
    title: 'My Profile',
    path: USER_PATH.PROFILE,
    component: <LoadingBlock />,
    exact: false,

  },
  {
    tab: 'Appointments',
    title: 'My Appointments',
    path: USER_PATH.APPOINTMENTS,
    component: <AppointmentsList />,
    exact: false,

  },
  {
    tab: 'Resolutions',
    title: 'My Resolutions',
    path: USER_PATH.RESOLUTIONS,
    component: <LoadingBlock />,
    exact: false,

  },
];

export const doctorTabsInfo = [
  {
    tab: 'Patients',
    title: 'My Patients',
    path: USER_PATH.PATIENTS,
    component: <PatientsList />,
    exact: false,

  },
  {
    tab: 'Resolutions',
    title: 'My Resolutions',
    path: USER_PATH.RESOLUTIONS,
    component: <LoadingBlock />,
    exact: false,

  },
];
