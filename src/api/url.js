import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://reactlabapi.herokuapp.com/api/',
});

export const url = {
  registration: () => '/auth/registration',
  login: () => '/auth/login',
  getProfile: () => '/auth/profile',
  getSpecializations: () => '/specializations',
  getAppointments: () => '/appointments/patient/me',
  addNewAppointment: () => '/appointments',
  getPatients: () => '/appointments/doctor/me',
  appointmentFreeTime: () => 'appointments/time/free',
  getDoctorsBySpecialization: (specId) => `/doctors/specialization/${specId}`,
  deleteAppointment: (id) => `/appointments${id}`,

};
