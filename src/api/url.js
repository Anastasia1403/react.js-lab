import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://reactlabapi.herokuapp.com/api/',
});

export const url = {
  registration: '/auth/registration',
  login: '/auth/login',
  getProfile: '/auth/profile',
  getSpecializations: '/specializations',
  getAppointments: '/appointments/patient/me?offset=0&limit=20',
  addNewAppointment: '/appointments',
  getPatients: '/appointments/doctor/me?offset=0&limit=20',
};
