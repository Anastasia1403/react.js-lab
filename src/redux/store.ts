import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import registrationReducer from './registration/slice';
import loginReducer from './login/slice';
import profileReducer from './getProfile/slice';
import appointmentsReducer from './getAppointments/slice';
import newAppointmentReducer from './addNewAppointment/slice';
import specializationsReducer from './getSpecializations/slice';
import doctorsReducer from './getDoctors/slice';
import freeTimeReducer from './getFreeTime/slice';
import patientsReducer from './getPatients/slice';
import notificationReducer from './showNotification/slice';

const loginPersistConfig = {
  key: 'login',
  storage,
};

const profilePersistConfig = {
  key: 'profile',
  storage,
};

const rootReducer = {
  registration: registrationReducer,
  login: persistReducer(loginPersistConfig, loginReducer),
  profile: persistReducer(profilePersistConfig, profileReducer),

  appointments: appointmentsReducer,
  appointment: newAppointmentReducer,

  patients: patientsReducer,
  specializations: specializationsReducer,
  doctors: doctorsReducer,
  time: freeTimeReducer,

  notification: notificationReducer,
};

const store = configureStore({ reducer: rootReducer });

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
