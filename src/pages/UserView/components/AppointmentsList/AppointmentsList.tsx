import React, { useEffect } from 'react';
import { appointmentsList, loadingStatus } from 'redux/appointments/selectors';
import {
  LoadingBlock, AppointmentCard, CardList, EmptyBlock,
} from 'components';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import { userViewDict } from 'pages/UserView/dictionary';
import { Appointment, IAppointmentForPatient } from 'types/appointments';
import { loadAppointments } from 'redux/appointments/loadAppointments.thunk';
import { userRoleSelector } from 'redux/auth/selectors';

const AppointmentsList = function () {
  const appointments = useAppSelector(appointmentsList);
  const loading = useAppSelector(loadingStatus);
  const role = useAppSelector(userRoleSelector);

  const dispatch = useAppDispatch();

  function isForPatient(apps: Appointment[]): apps is IAppointmentForPatient[] {
    return (apps as IAppointmentForPatient[]) !== undefined;
  }

  useEffect(() => {
    if (role) dispatch(loadAppointments(role));
  }, []);

  if (loading) {
    return <LoadingBlock />;
  }
  if (appointments.length > 0) {
    return (
      <CardList>
        { isForPatient(appointments) ? appointments.map((listItem: IAppointmentForPatient) => (
          <AppointmentCard
            key={listItem.id}
            {...listItem}
          />
        )) : null}
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
