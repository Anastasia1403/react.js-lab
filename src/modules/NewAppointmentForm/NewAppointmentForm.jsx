import React from 'react';
import SelectDoctor from '../SelectDoctor/SelectDoctor';
import { GridButton } from '../../components/ButtonSubmit/styled';
import StyledCalendar from '../StyledCalendar/StyledCalendar';
import {
  StyledNewAppointmentForm, Stage,
} from './styled';
import TableTime from '../TableTime/TableTime';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const NewAppointmentForm = function ({
  formik, getUnavailibleTime, DoctorList, TimeList,
}) {
  getUnavailibleTime(formik.values.doctor, formik.values.date);
  return (

    <StyledNewAppointmentForm onSubmit={formik.handleSubmit}>
      <section>
        <Stage>1. Select a doctor and define the reason of your visit</Stage>

        <SelectDoctor formik={formik} DoctorList={DoctorList} />
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
          TimeList={TimeList}
          formik={formik}
          blockedTime={getUnavailibleTime(formik.values.doctor, formik.values.date)}
          blocked={!(formik.values.doctor && formik.values.occupation)}
        />
      </section>
      <GridButton type="submit" disabled={!formik.isValid}>Submit</GridButton>
    </StyledNewAppointmentForm>

  );
};

export default NewAppointmentForm;
