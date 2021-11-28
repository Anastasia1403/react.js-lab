import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from './styled';
import PatientCard from '../Card/PatientCard';
import { patientsList, loadingStatus } from '../../redux/getPatients/selectors';
import { getPatients } from '../../redux/getPatients/thunk';

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
