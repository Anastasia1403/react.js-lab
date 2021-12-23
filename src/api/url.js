import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://reactlabapi.herokuapp.com/api/',
});

export const url = {
  registration: () => '/auth/registration',
  login: () => '/auth/login',
  profile: () => '/auth/profile',
  getSpecializations: () => '/specializations',
  getAppointmentsForPatient: () => '/appointments/patient/me',
  addNewAppointment: () => '/appointments',
  getAppointmentsForDoctor: () => '/appointments/doctor/me',
  appointmentFreeTime: () => 'appointments/time/free',
  getDoctorsBySpecialization: (specId) => `/doctors/specialization/${specId}`,
  resolutionForDoctor: () => '/resolutions/doctor/me',
  resolutionForPatient: () => '/resolutions/patient/me',
  createNewResolution: () => '/resolutions',
  editResolution: (id) => `resolutions/${id}`,

  deleteAppointment: (id) => `/appointments/${id}`,

};
