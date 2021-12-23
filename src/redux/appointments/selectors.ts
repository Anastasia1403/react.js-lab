import { RootState } from 'redux/store';
import formatDate from 'utils/formatDate';
import { Appointment } from 'types/appointments';

export const appointmentsList = (state: RootState) => state.appointments.appointments
  .map((app: Appointment) => {
    const formattedDate = formatDate(app.visit_date);
    const formattedApp = { ...app, visit_date: formattedDate };
    return formattedApp;
  });

export const loadingStatus = (state: RootState) => state.appointments.loading;
export const appointmentErrorSelector = (state: RootState) => state.appointments.error;

export const creationStatusSelector = (state: RootState) => state.appointments.creationStatus;
export const creationErrorSelector = (state: RootState) => state.appointments.creationError;
