import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { error, status } from 'redux/addNewAppointment/selectors';
import addNewAppointment from 'redux/addNewAppointment/thunk';
import SelectDoctor from 'modules/SelectDoctor/SelectDoctor';
import StyledCalendar from 'modules/StyledCalendar/StyledCalendar';
import TableTime from 'modules/TableTime/TableTime';
import validationSchema from './validationSchema';
import {
  StyledNewAppointmentForm, Stage, ButtonSubmit,
} from './styled';

const NewAppointmentForm = function () {
  const dispatch = useDispatch();
  const statusText = useSelector(status);
  const errorMessage = useSelector(error);
  const history = useHistory();

  useEffect(() => {
    if (statusText === 'Created') history.push('/user-view/appointments');
  }, [statusText]);

  const handleSubmit = (values) => {
    const formattedValues = {
      date: values.time,
      reason: values.reason,
      note: values.note,
      doctorID: values.doctor,
    };
    dispatch(addNewAppointment(formattedValues));
  };

  const initialValues = {
    date: '',
    time: '',
    occupation: '',
    doctor: '',
    reason: '',
    note: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      isInitialValid={false}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form data-testid="form">
          <StyledNewAppointmentForm onSubmit={formik.handleSubmit}>
            <section>
              <Stage>1. Select a doctor and define the reason of your visit</Stage>

              <SelectDoctor />
            </section>

            <section>
              <Stage>2. Choose a day for an appointment</Stage>

              <StyledCalendar
                blocked={!(formik.values.doctor && formik.values.occupation)}
                value={formik.values.date ? new Date(formik.values.date) : ''} //
                minDate={new Date()}
              />
            </section>

            <section>
              <Stage>3. Select an available timeslot</Stage>

              <TableTime
                blocked={!(formik.values.doctor && formik.values.occupation)}
              />
            </section>
            {errorMessage && <div>{errorMessage}</div>}
            <ButtonSubmit type="submit" disabled={!formik.isValid}>Submit</ButtonSubmit>
          </StyledNewAppointmentForm>
        </Form>
      )}

    </Formik>
  );
};

export default NewAppointmentForm;
