import formatDate from '../../utils/formatDate';

export const appointmentsList = (state) => state.appointments.appointments.map((app) => {
  const formattedDate = formatDate(app.visit_date);
  const formattedApp = { ...app, visit_date: formattedDate };
  return formattedApp;
});

export const loadingStatus = (state) => state.appointments.loading;
