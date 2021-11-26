import authHeader from '../redux/helper';
import instance from './url';

const api = {
  registration(userData) {
    return instance.post('/auth/registration', userData)
      .then((response) => response);
  },

  login(userData) {
    return instance.post('/auth/login', userData)
      .then((response) => {
        localStorage.setItem('tokenData', JSON.stringify(response.data));
        return (
          response
        );
      });
  },
  getProfile() {
    return instance.get('/auth/profile', { headers: authHeader() })
      .then((response) => (
        response.data
      ));
  },
  getSpec() {
    return instance.get('/specializations')
      .then((response) => (
        response.data
      ));
  },
  getDoctors(specId) {
    return instance.get(`/doctors/specialization/${specId}`)
      .then((response) => (
        response.data
      ));
  },
  getFreeTime({ doctorId, date }) {
    return instance.get(`/appointments/time/free?date=${date}&doctorID=${doctorId}`)
      .then((response) => (
        response.data
      ));
  },
  getAppointments() {
    return instance.get('/appointments/patient/me?offset=0&limit=20', { headers: authHeader() })
      .then((response) => (
        response.data.appointments
      ));
  },
  addNewAppointment(appointmentData) {
    return instance.post('/appointments', appointmentData, { headers: authHeader() })
      .then((response) => response);
  },
  getPatients() {
    return instance.get('/appointments/doctor/me?offset=0&limit=20', { headers: authHeader() })
      .then((response) => (

        response.data.appointments
      ));
  },
};

export default api;
