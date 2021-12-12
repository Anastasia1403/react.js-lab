import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './registration/slice';
import loginReducer from './login/slice';
import profileReducer from './getProfile/slice';
import appointmentsReducer from './getAppointments/slice';
import newAppointmentReducer from './addNewAppointment/slice';
import specializationsReducer from './getSpecializations/slice';
import doctorsReducer from './getDoctors/slice';
import freeTimeReducer from './getFreeTime/slice';
import patientsReducer from './getPatients/slice';

const store = configureStore({
  reducer: {
    registration: registrationReducer,
    login: loginReducer,
    profile: profileReducer,

    appointments: appointmentsReducer,
    appointment: newAppointmentReducer,

    patients: patientsReducer,
    specializations: specializationsReducer,
    doctors: doctorsReducer,
    time: freeTimeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
