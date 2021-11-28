import createOptionsArrayForSelect from '../../utils/createOptionsArrayForSelect';

const doctorsSpecializations = (state) => createOptionsArrayForSelect(
  state.specializations.specializations,
  'specialization_name',
);

export default doctorsSpecializations;
