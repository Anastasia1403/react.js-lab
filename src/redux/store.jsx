import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './registration/slice';
import loginReducer from './login/slice';
import getProfileReducer from './getProfile/slice';
import getAppointmentsReducer from './getAppointments/slice';
import addAppointmentReducer from './addAppointment/slice';
import getSpecReducer from './getSpec/slice';
import getDoctorsReducer from './getDoctors/slice';
import getFreeTimeReducer from './getFreeTime/slice';
import getPatientsReducer from './getPatients/slice';

const store = configureStore({
  reducer: {
    registration: registrationReducer,
    login: loginReducer,
    profile: getProfileReducer,

    appointments: getAppointmentsReducer,
    appointment: addAppointmentReducer,

    specializations: getSpecReducer,
    doctors: getDoctorsReducer,
    time: getFreeTimeReducer,
    patients: getPatientsReducer,
  },
});

export default store;
