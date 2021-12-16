import React, { useEffect } from 'react';
import getAppointments from 'redux/getAppointments/thunk';
import { appointmentsList, loadingStatus } from 'redux/getAppointments/selectors';
import { LoadingBlock } from 'components/LoadingBlock';
import { status } from 'redux/addNewAppointment/selectors';
import { nullifyStatus } from 'redux/addNewAppointment/slice';
import { AppointmentCard, CardList } from 'components';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import { USER_VIEW_DICT } from 'pages/UserView/dictionary';
import EmptyBlock from 'components/EmptyBlock/EmptyBlock';
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
      text1={USER_VIEW_DICT.EMPTY.APPOINTMENTS_1}
      text2={USER_VIEW_DICT.EMPTY.APPOINTMENTS_2}
    />
  );
};

// <CardList>
//   {loading ? <LoadingBlock />
//     : appointments
//       ? appointments.map((listItem: IAppointmentForPatient) => (
//         <AppointmentCard
//           key={listItem.id}
//           {...listItem}
//         />
//       ))
//       : (
//         <EmptyBlock
//           text1={USER_VIEW_DICT.EMPTY.APPOINTMENTS_1}
//           text2={USER_VIEW_DICT.EMPTY.APPOINTMENTS_2}
//         />
//       )}
// </CardList>

export default AppointmentsList;
