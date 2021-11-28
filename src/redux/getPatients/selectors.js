import formatDate from '../../utils/formatDate';

export const patientsList = (state) => state.patients.patients.map((item) => {
  // eslint-disable-next-line
    // debugger;
  const formattedDate = formatDate(item.visit_date);
  const formattedItem = { ...item, visit_date: formattedDate };

  return formattedItem;
});

export const loadingStatus = (state) => state.patients.loading;
