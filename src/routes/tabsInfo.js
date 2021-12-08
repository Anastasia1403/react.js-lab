import React from 'react';
import { AppointmentsList } from 'modules/AppointmentsList';
import { PatientsList } from 'modules/PatientsList';

export const userTabsInfo = [
  {
    tab: 'Profile',
    title: 'My Profile',
    path: '/profile',
  },
  {
    tab: 'Appointments',
    title: 'My Appointments',
    path: '/appointments',
    component: <AppointmentsList />,
  },
  {
    tab: 'Resolutions',
    title: 'My Resolutions',
    path: '/resolutions',

  },
];

export const doctorTabsInfo = [
  {
    tab: 'Patients',
    title: 'My Patients',
    path: '/patients',
    component: <PatientsList />,

  },
  {
    tab: 'Resolutions',
    title: 'My Resolutions',
    path: '/resolution',

  },
];
