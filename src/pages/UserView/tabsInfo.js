import appointments from './appointments';
import patients from './patients';

export const userTabsInfo = [
  {
    tab: 'Profile',
    title: 'My Profile',
    dataList: [],
    path: '/profile',
  },
  {
    tab: 'Appointments',
    title: 'My Appointments',
    dataList: appointments,
    path: '/appointments',

  },
  {
    tab: 'Resolutions',
    title: 'My Resolutions',
    dataList: [],
    path: '/resolutions',

  },
];

export const doctorTabsInfo = [
  {
    tab: 'Patients',
    title: 'My Patients',
    dataList: patients,
  },
  {
    tab: 'Resolutions',
    title: 'My Resolutions',
    dataList: {},
  },
];
