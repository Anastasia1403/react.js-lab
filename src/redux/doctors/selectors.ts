import { format } from 'date-fns';
import { RootState } from 'redux/store';
import createOptionsArrayForSelect from 'utils/createOptionsArrayForSelect';

export const doctorsListSelector = (state: RootState) => createOptionsArrayForSelect(state.doctors.doctorsName, 'first_name', 'last_name');

export const doctorsSpecializationsSelector = (state: RootState) => createOptionsArrayForSelect(
  state.doctors.specializations,
  'specialization_name',
);
export const freeTimeListSelector = (state: RootState) => state.doctors.time
  .map((item) => ({ label: format(new Date(item), 'h:mm aaa'), value: item }));
