import { doctorList } from '../modules/NewAppointment/services';

const findDoctorByName = (fullName) => doctorList
  .find((doctor) => fullName.includes(doctor.firstName) && fullName.includes(doctor.lastName));

export default findDoctorByName;
