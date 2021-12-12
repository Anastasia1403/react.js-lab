import React, { useEffect } from 'react';
import getAppointments from 'redux/getAppointments/thunk';
import { appointmentsList, loadingStatus } from 'redux/getAppointments/selectors';
import { LoadingBlock } from 'components/LoadingBlock';
import { status } from 'redux/addNewAppointment/selectors';
import { nullifyStatus } from 'redux/addNewAppointment/slice';
import { AppointmentCard, CardList } from 'components';
import { IAppointmentForPatient } from 'models/interfaces';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';

const AppointmentsList = function () {
  const appointments = useAppSelector(appointmentsList);
  const loading = useAppSelector(loadingStatus);
  const statusOfMakingNewAppointment = useAppSelector(status);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAppointments());
    if (statusOfMakingNewAppointment === 'Created') dispatch(nullifyStatus());
  }, []);
  return (
    <CardList>
      {loading ? <LoadingBlock />
        : appointments
              && appointments.map((listItem: IAppointmentForPatient) => (
                <AppointmentCard key={listItem.id} {...listItem} />
              ))}
    </CardList>
  );
};

export default AppointmentsList;
