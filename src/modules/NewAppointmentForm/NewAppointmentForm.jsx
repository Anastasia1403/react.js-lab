import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import SelectDoctor from '../SelectDoctor/SelectDoctor';
import StyledCalendar from '../StyledCalendar/StyledCalendar';
import {
  StyledNewAppointmentForm, Stage, ButtonSubmit,
} from './styled';
import TableTime from '../TableTime/TableTime';
import validationSchema from './validationSchema';
import { error, status } from '../../redux/addNewAppointment/selectors';
import addNewAppointment from '../../redux/addNewAppointment/thunk';
import getFreeTime from '../../redux/getFreeTime/thunk';

const NewAppointmentForm = function () {
  const dispatch = useDispatch();
  const statusText = useSelector(status);
  const errorMessage = useSelector(error);
  const history = useHistory();

  useEffect(() => {
    if (statusText === 'Created') history.push('/user-view/appointments');
  }, [statusText]);

  const onSubmit = (values) => {
    const formattedValues = {
      date: values.time,
      reason: values.reason,
      note: values.note,
      doctorID: values.doctor,
    };
    dispatch(addNewAppointment(formattedValues));
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

  const onDataChange = (value) => {
    const formatDate = format(value, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    formik.setFieldValue('date', formatDate);
    dispatch(getFreeTime({ doctorId: formik.values.doctor, date: formatDate }));
  };

  return (

    <StyledNewAppointmentForm onSubmit={formik.handleSubmit}>
      <section>
        <Stage>1. Select a doctor and define the reason of your visit</Stage>

        <SelectDoctor formik={formik} />
      </section>

      <section>
        <Stage>2. Choose a day for an appointment</Stage>

        <StyledCalendar
          blocked={!(formik.values.doctor && formik.values.occupation)}
          onChange={onDataChange}
          value={formik.values.date ? new Date(formik.values.date) : ''} //
          minDate={new Date()}
        />
      </section>

      <section>
        <Stage>3. Select an available timeslot</Stage>

        <TableTime
          formik={formik}
          blocked={!(formik.values.doctor && formik.values.occupation)}
        />
      </section>
      {errorMessage && <div>{errorMessage}</div>}
      <ButtonSubmit type="submit" disabled={!formik.isValid}>Submit</ButtonSubmit>
    </StyledNewAppointmentForm>

  );
};

export default NewAppointmentForm;
