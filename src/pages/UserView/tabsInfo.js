import appointments from './appointments';

const userTabsInfo = [
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

export default userTabsInfo;
