import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from './styled';
import { getPatients } from '../../redux/getPatients/slice';
import PatientCard from '../Card/PatientCard';
import { patientsList, loadingStatus } from '../../redux/getPatients/selectors';

const PatientsList = function () {
  const patients = useSelector(patientsList);
  const loading = useSelector(loadingStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatients());
  }, []);
  return (
    <List>
      {loading ? <div>Loading...</div>
        : patients
        && (patients.map((listItem) => (
          <PatientCard key={listItem.id} listItem={listItem} />
        ))

        )}
    </List>
  );
};

export default PatientsList;
