import { IAppointmentForPatient } from 'models/interfaces';
import { RootState } from 'redux/store';
import formatDate from 'utils/formatDate';

export const appointmentsList = (state: RootState) => state.appointments.appointments
  .map((app: IAppointmentForPatient) => {
    const formattedDate = formatDate(app.visit_date);
    const formattedApp = { ...app, visit_date: formattedDate };
    return formattedApp;
  });

export const loadingStatus = (state: RootState) => state.appointments.loading;
