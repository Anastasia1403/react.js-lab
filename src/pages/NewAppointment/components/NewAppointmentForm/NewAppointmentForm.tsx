import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { createAppointment } from 'redux/appointments/createAppointment.thunk';
import { TableTime } from 'pages/NewAppointment/components/TableTime';
import { StyledCalendar } from 'pages/NewAppointment/components/StyledCalendar';
import { SelectDoctor } from 'pages/NewAppointment/components/SelectDoctor';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import { Stage } from 'pages/NewAppointment/dictionary';
import { IFormNewAppointment } from 'pages/NewAppointment/interface';
import { INewAppointment } from 'types/newAppointment';
import { USER_PATH } from 'routes/constants';
import { creationErrorSelector, creationStatusSelector } from 'redux/appointments/selectors';
import { nullifyCreateStatus } from 'redux/appointments/slice';
import validationSchema from './validationSchema';
import {
  StyledNewAppointmentForm, StageTitle, ButtonSubmit,
} from './styled';

const NewAppointmentForm = function () {
  const dispatch = useAppDispatch();
  const creationStatus = useAppSelector(creationStatusSelector);
  const creationErrorMessage = useAppSelector(creationErrorSelector);
  const history = useHistory();

  useEffect(() => {
    if (creationStatus) {
      history.push(USER_PATH.APPOINTMENTS);
      dispatch(nullifyCreateStatus());
    }
  }, [creationStatus]);

  const handleSubmit = (values: IFormNewAppointment): void => {
    const formattedValues: INewAppointment = {
      date: values.time,
      reason: values.reason,
      note: values.note,
      doctorID: values.doctor,
    };
    dispatch(createAppointment(formattedValues));
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
            {creationErrorMessage && <div>{creationErrorMessage}</div>}
            <ButtonSubmit type="submit" disabled={!formik.isValid}>Submit</ButtonSubmit>
          </StyledNewAppointmentForm>
        </Form>
      )}

    </Formik>
  );
};

export default NewAppointmentForm;
