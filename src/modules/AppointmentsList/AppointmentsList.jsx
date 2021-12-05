import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAppointments from '../../redux/getAppointments/thunk';
import AppointmentCard from '../Card/AppointmentCard';
import List from './styled';
import { appointmentsList, loadingStatus } from '../../redux/getAppointments/selectors';
import LoadingBlock from '../../components/LoadingBlock/LoadingBlock';
import { status } from '../../redux/addNewAppointment/selectors';
import { nullifyStatus } from '../../redux/addNewAppointment/slice';

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
    <List>
      {loading ? <LoadingBlock />
        : appointments
              && appointments.map((listItem) => (
                <AppointmentCard key={listItem.id} listItem={listItem} />
              ))}
    </List>
  );
};

export default AppointmentsList;
