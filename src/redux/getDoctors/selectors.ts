import { RootState } from 'redux/store';
import createOptionsArrayForSelect from 'utils/createOptionsArrayForSelect';

const doctorsList = (state: RootState) => createOptionsArrayForSelect(state.doctors.doctors, 'first_name', 'last_name');

export default doctorsList;
