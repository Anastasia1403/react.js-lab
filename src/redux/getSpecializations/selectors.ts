import { RootState } from 'redux/store';
import createOptionsArrayForSelect from 'utils/createOptionsArrayForSelect';

const doctorsSpecializations = (state: RootState) => createOptionsArrayForSelect(
  state.specializations.specializations,
  'specialization_name',
);

export default doctorsSpecializations;
