import moment from 'moment';
import findDoctorByName from '../../utils/findDoctorByName';

const getUnavailibleTime = (currentDoctor, date) => {
  // unavailible time for each date
  const currentDate = moment(date).format('MMM Do YY');

  const currentDoctorInfo = findDoctorByName(currentDoctor);
  const currentDoctorApp = currentDoctorInfo ? currentDoctorInfo.appointments : [];

  const blockedTime = [];
  if (currentDoctorApp) {
    currentDoctorApp.map((app) => (moment(app.date).format('MMM Do YY') === currentDate
      ? blockedTime.push(app.time) : null));
  }
  return blockedTime;
};

export default getUnavailibleTime;
