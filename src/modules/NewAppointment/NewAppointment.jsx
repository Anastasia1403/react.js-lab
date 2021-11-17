import React from 'react';
import { useFormik } from 'formik';
import moment from 'moment';
import Title from '../../components/Title/Title';
import validationSchema from './validationSchema';
import { TimeList, DoctorList } from './services';
import { Stage, StyledMain, StyledNav } from './styled';
import { ReactComponent as ArrowIcon } from './img/angle-right-b.svg';
import { StyledLink17 } from '../../components/StyledLink/StyledLink';
import NewAppointmentForm from '../NewAppointmentForm/NewAppointmentForm';

const formatTime = (time, diration = 1) => { // input format is like 4:00 pm, output is 4 pm - 5 pm
  const periodStart = time.slice(-2);
  let hourEnd;
  let periodEnd;
  const hourStart = +time.split(':', 1).join();
  if (hourStart === 12) {
    periodEnd = periodStart === 'am' ? 'pm' : 'am';
    hourEnd = 1;
  } else {
    hourEnd = hourStart + diration;
    periodEnd = periodStart;
  }
  const formattedTime = `${hourStart} ${periodStart} - ${hourEnd} ${periodEnd}`;
  return formattedTime;
};

const findInDoctorListByName = (fullName) => DoctorList.find((doctor) => {
  const name = `${doctor.firstName} ${doctor.lastName}`;
  return fullName === name;
});

const getUnavailibleTime = (currentDoctor, date) => {
  // unavailible time for each date
  const currentDate = moment(date).format('MMM Do YY');

  const currentDoctorInfo = findInDoctorListByName(currentDoctor);
  const currentDoctorApp = currentDoctorInfo ? currentDoctorInfo.appointments : [];

  const blockedTime = [];
  if (currentDoctorApp) {
    currentDoctorApp.map((app) => (moment(app.date).format('MMM Do YY') === currentDate
      ? blockedTime.push(app.time) : null));
  }
  return blockedTime;
};

const NewAppointment = function ({ appointmentsList, setAppointmentsList, history }) {
  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      occupation: '',
      doctor: '',
      reason: '',
      note: '',
    },
    validationSchema,
    isInitialValid: false,
    onSubmit: (values) => {
      const formattedDateTime = `${moment(formik.date).format('ddd MMM DD, YYYY')} ${formatTime(values.time)}`;
      const id = appointmentsList.length + 1;
      const doctorItem = findInDoctorListByName(formik.values.doctor);
      const { imageUrl } = doctorItem;
      const formattedValues = {
        ...values, date: formattedDateTime, id, imageUrl,
      };
      const appointments = [...appointmentsList];
      appointments.push(formattedValues);
      setAppointmentsList(appointments);
      history.push('/user-view');
    },

  });

  return (
    <StyledMain>
      <StyledNav>
        <StyledLink17 to="/user-view">Doctor</StyledLink17>
        <ArrowIcon alt="arrow" />
        <Stage>Make an appointment</Stage>

      </StyledNav>
      <Title>Make an appointment</Title>
      <NewAppointmentForm
        onSubmit={formik.handleSubmit}
        formik={formik}
        getUnavailibleTime={getUnavailibleTime}
        DoctorList={DoctorList}
        TimeList={TimeList}
      />

    </StyledMain>

  );
};

export default NewAppointment;
