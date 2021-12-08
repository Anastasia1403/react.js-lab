import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAppointments from 'redux/getAppointments/thunk';
import { AppointmentCard } from 'modules/Card';
import { appointmentsList, loadingStatus } from 'redux/getAppointments/selectors';
import { LoadingBlock } from 'components/LoadingBlock';
import { status } from 'redux/addNewAppointment/selectors';
import { nullifyStatus } from 'redux/addNewAppointment/slice';
import { CardList } from 'components';

const AppointmentsList = function () {
  const appointments = useSelector(appointmentsList);
  const loading = useSelector(loadingStatus);
  const statusOfMakingNewAppointment = useSelector(status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppointments());
    if (statusOfMakingNewAppointment === 'Created') dispatch(nullifyStatus());
  }, []);
  return (
    <CardList>
      {loading ? <LoadingBlock />
        : appointments
              && appointments.map((listItem) => (
                <AppointmentCard key={listItem.id} listItem={listItem} />
              ))}
    </CardList>
  );
};

export default AppointmentsList;
