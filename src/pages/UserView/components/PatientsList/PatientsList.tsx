import { CardList, PatientCard } from 'components';
import LoadingBlock from 'components/LoadingBlock/LoadingBlock';
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
  return (
    <CardList>
      {loading ? <LoadingBlock />
        : patients
        && (patients.map((listItem: IAppointmentForDoctor) => (
          <PatientCard key={listItem.id} {...listItem} />
        ))

        )}
    </CardList>
  );
};

export default PatientsList;
