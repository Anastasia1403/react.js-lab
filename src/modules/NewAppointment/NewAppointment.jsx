import React from 'react';
import { useFormik } from 'formik';
import moment from 'moment';
import Title from '../../components/Title/Title';
import validationSchema from './validationSchema';
import {
  Step, StyledLink, StyledMain, StyledNav,
} from './styled';
import { ReactComponent as ArrowIcon } from './img/angle-right-b.svg';
import NewAppointmentForm from '../NewAppointmentForm/NewAppointmentForm';
import findDoctorByName from '../../utils/findDoctorByName';
import formatTime from './utils';

const NewAppointment = function ({ history, onSubmitNewAppointment }) {
  const onSubmit = (values) => {
    const formattedDateTime = `${moment(values.date).format('ddd MMM DD, YYYY')} ${formatTime(values.time)}`;
    const id = Date.now();
    const doctorItem = findDoctorByName(values.doctor);
    const { imageUrl } = doctorItem;
    const formattedValues = {
      ...values, date: formattedDateTime, id, imageUrl,
    };
    onSubmitNewAppointment(formattedValues);
    history.push('/user-view');
  };

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
    onSubmit,

  });

  return (
    <StyledMain>
      <StyledNav>
        <StyledLink to="/user-view">Doctors</StyledLink>
        <ArrowIcon alt="arrow" />
        <Step>Make an appointment</Step>

      </StyledNav>
      <Title>Make an appointment</Title>
      <NewAppointmentForm
        onSubmit={formik.handleSubmit}
        formik={formik}
      />

    </StyledMain>

  );
};

export default NewAppointment;
