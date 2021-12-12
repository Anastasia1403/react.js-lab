import { IAppointmentForDoctor } from 'models/interfaces';
import { RootState } from 'redux/store';
import formatDate from '../../utils/formatDate';

export const patientsList = (state: RootState) => state.patients.patients
  .map((item: IAppointmentForDoctor) => {
    const formattedDate = formatDate(item.visit_date);
    const formattedItem = { ...item, visit_date: formattedDate };

    return formattedItem;
  });

export const loadingStatus = (state: RootState) => state.patients.loading;
