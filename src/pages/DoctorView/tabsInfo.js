import patients from './patients';

const doctorTabsInfo = [
  {
    tab: 'Patients',
    title: 'My Patients',
    dataList: patients,
    path: '/patient',
  },
  {
    tab: 'Resolutions',
    title: 'My Resolutions',
    dataList: [1, 2, 3],
    path: '/resolution',
  },
];

export default doctorTabsInfo;
