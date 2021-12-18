import {
  EmptyBlock, CardList, PatientCard, LoadingBlock,
} from 'components';
import { userViewDict } from 'pages/UserView/dictionary';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadingStatus } from 'redux/getAppointments/selectors';
import { patientsList } from 'redux/getPatients/selectors';
import { getPatients } from 'redux/getPatients/thunk';
import { IAppointmentForDoctor } from 'types/appointments';

const PatientsList = function () {
  const patients = useSelector(patientsList);
  const loading = useSelector(loadingStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatients());
  }, []);

  if (loading) {
    return <LoadingBlock />;
  }
  if (patients.length > 0) {
    return (
      <CardList>
        {patients.map((listItem: IAppointmentForDoctor) => (
          <PatientCard
            key={listItem.id}
            {...listItem}
          />
        ))}
      </CardList>
    );
  }
  return (
    <EmptyBlock
      text1={userViewDict.empty.patients_1}
      text2={userViewDict.empty.patients_2}
    />
  );
};

export default PatientsList;
