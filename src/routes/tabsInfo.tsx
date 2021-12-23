import React from 'react';
import { LoadingBlock } from 'components';
import { AppointmentsList } from 'pages/UserView/components/AppointmentsList';
import { PatientsList } from 'pages/UserView/components/PatientsList';
import Resolutions from 'pages/UserView/components/Resolutions/Resolutions';
import { USER_PATH } from './constants';

export interface TabInfo {
  tab: string,
  title: string,
  path: string,
  comp: object,
  exact?: boolean,
  default?: boolean
}

export const patientTabsInfo: Array<TabInfo> = [
  {
    tab: 'Profile',
    title: 'My Profile',
    path: USER_PATH.PROFILE,
    comp: <LoadingBlock />,
    exact: false,
    default: false,
  },
  {
    tab: 'Appointments',
    title: 'My Appointments',
    path: USER_PATH.APPOINTMENTS,
    comp: <AppointmentsList />,
    exact: false,
    default: true,
  },
  {
    tab: 'Resolutions',
    title: 'My Resolutions',
    path: USER_PATH.RESOLUTIONS,
    comp: <Resolutions />,
    exact: false,
    default: false,
  },
];

export const doctorTabsInfo = [
  {
    tab: 'Patients',
    title: 'My Patients',
    path: USER_PATH.PATIENTS,
    comp: <PatientsList />,
    exact: false,
    default: true,
  },
  {
    tab: 'Resolutions',
    title: 'My Resolutions',
    path: USER_PATH.RESOLUTIONS,
    comp: <Resolutions />,
    exact: false,
    default: false,
  },
];
