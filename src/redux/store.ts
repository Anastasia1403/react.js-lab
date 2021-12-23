import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/slice';
import appointmentsReducer from './appointments/slice';
import specializationsReducer from './getSpecializations/slice';
import doctorsReducer from './getDoctors/slice';
import freeTimeReducer from './getFreeTime/slice';
import notificationReducer from './notifications/slice';
import resolutionsReducer from './resolutions/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const combinedReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  appointments: appointmentsReducer,
  specializations: specializationsReducer,
  doctors: doctorsReducer,
  time: freeTimeReducer,
  notification: notificationReducer,
  resolutions: resolutionsReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'auth/logout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const store = configureStore({ reducer: rootReducer });

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
