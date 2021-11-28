import createOptionsArrayForSelect from '../../utils/createOptionsArrayForSelect';

const doctorsList = (state) => createOptionsArrayForSelect(state.doctors.doctors, 'first_name', 'last_name');

export default doctorsList;
