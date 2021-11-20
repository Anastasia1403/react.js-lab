import React from 'react';
import SelectDoctor from '../SelectDoctor/SelectDoctor';
import StyledCalendar from '../StyledCalendar/StyledCalendar';
import {
  StyledNewAppointmentForm, Stage, ButtonSubmit,
} from './styled';
import TableTime from '../TableTime/TableTime';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import getUnavailibleTime from './utils';

const NewAppointmentForm = function ({ formik }) {
  return (

    <StyledNewAppointmentForm onSubmit={formik.handleSubmit}>
      <section>
        <Stage>1. Select a doctor and define the reason of your visit</Stage>

        <SelectDoctor formik={formik} />
      </section>

      <section>
        <Stage>2. Choose a day for an appointment</Stage>

        {(formik.touched.date && formik.errors.date) && (
          <ErrorMessage>{formik.errors.date}</ErrorMessage>)}

        <StyledCalendar
          blocked={!(formik.values.doctor && formik.values.occupation)}
          onChange={(value) => formik.setFieldValue('date', value)}
          value={formik.values.date}
          minDate={new Date()}
        />
      </section>

      <section>
        <Stage>3. Select an available timeslot</Stage>

        {(formik.touched.time && formik.errors.time) && (
          <ErrorMessage>{formik.errors.time}</ErrorMessage>)}

        <TableTime
          formik={formik}
          blockedTime={getUnavailibleTime(formik.values.doctor, formik.values.date)}
          blocked={!(formik.values.doctor && formik.values.occupation)}
        />
      </section>
      <ButtonSubmit type="submit" disabled={!formik.isValid}>Submit</ButtonSubmit>
    </StyledNewAppointmentForm>

  );
};

export default NewAppointmentForm;
