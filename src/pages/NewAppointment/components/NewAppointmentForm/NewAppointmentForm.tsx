import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { error, status } from 'redux/addNewAppointment/selectors';
import addNewAppointment from 'redux/addNewAppointment/thunk';
import { TableTime } from 'pages/NewAppointment/components/TableTime';
import { StyledCalendar } from 'pages/NewAppointment/components/StyledCalendar';
import { SelectDoctor } from 'pages/NewAppointment/components/SelectDoctor';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import { Stage } from 'pages/NewAppointment/dictionary';
import { IFormNewAppointment } from 'pages/NewAppointment/interface';
import { INewAppointment } from 'types/newAppointment';
import validationSchema from './validationSchema';
import {
  StyledNewAppointmentForm, StageTitle, ButtonSubmit,
} from './styled';

const NewAppointmentForm = function () {
  const dispatch = useAppDispatch();
  const statusText = useAppSelector(status);
  const errorMessage = useAppSelector(error);
  const history = useHistory();

  useEffect(() => {
    if (statusText === 'Created') history.push('/user-view/appointments');
  }, [statusText]);

  const handleSubmit = (values: IFormNewAppointment): void => {
    const formattedValues: INewAppointment = {
      date: values.time,
      reason: values.reason,
      note: values.note,
      doctorID: values.doctor,
    };
    dispatch(addNewAppointment(formattedValues));
  };

  const initialValues: IFormNewAppointment = {
    date: undefined,
    time: undefined,
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
          <StyledNewAppointmentForm>
            <section>
              <StageTitle>{Stage.ONE}</StageTitle>

              <SelectDoctor />
            </section>

            <section>
              <StageTitle>{Stage.TWO}</StageTitle>

              <StyledCalendar
                blocked={!(formik.values.doctor && formik.values.occupation)}
                value={formik.values.date ? new Date(formik.values.date) : null}
                minDate={new Date()}
              />
            </section>

            <section>
              <StageTitle>{Stage.THREE}</StageTitle>

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
