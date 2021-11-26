import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppointmentCard from '../Card/AppointmentCard';
import { getAppointments } from '../../redux/getAppointments/slice';
import List from './styled';
import { appointmentsList, loadingStatus } from '../../redux/getAppointments/selectors';

const AppointmentsList = function () {
  const appointments = useSelector(appointmentsList);
  const loading = useSelector(loadingStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppointments());
  }, []);
  return (
    <List>
      {loading ? <div>Loading...</div>
        : appointments
              && appointments.map((listItem) => (
                <AppointmentCard key={listItem.id} listItem={listItem} />
              ))}
    </List>
  );
};

export default AppointmentsList;
