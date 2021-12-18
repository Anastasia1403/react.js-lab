import React, { useEffect } from 'react';
import getAppointments from 'redux/getAppointments/thunk';
import { appointmentsList, loadingStatus } from 'redux/getAppointments/selectors';
import {
  LoadingBlock, AppointmentCard, CardList, EmptyBlock,
} from 'components';
import { status } from 'redux/addNewAppointment/selectors';
import { nullifyStatus } from 'redux/addNewAppointment/slice';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import { userViewDict } from 'pages/UserView/dictionary';
import { IAppointmentForPatient } from 'types/appointments';

const AppointmentsList = function () {
  const appointments = useAppSelector(appointmentsList);
  const loading = useAppSelector(loadingStatus);
  const statusOfMakingNewAppointment = useAppSelector(status);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAppointments());
    if (statusOfMakingNewAppointment === 'Created') dispatch(nullifyStatus());
  }, []);

  if (loading) {
    return <LoadingBlock />;
  }
  if (appointments.length > 0) {
    return (
      <CardList>
        {appointments.map((listItem: IAppointmentForPatient) => (
          <AppointmentCard
            key={listItem.id}
            {...listItem}
          />
        ))}
      </CardList>
    );
  }
  return (
    <EmptyBlock
      text1={userViewDict.empty.appointments_1}
      text2={userViewDict.empty.appointments_2}
    />
  );
};

export default AppointmentsList;
