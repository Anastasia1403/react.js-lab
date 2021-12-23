import {
  EmptyBlock, CardList, LoadingBlock,
} from 'components';
import PatientCardContainer from 'components/Card/PatientCardContainer';
import { userViewDict } from 'pages/UserView/dictionary';
import React, { useEffect } from 'react';
import { appointmentsList, loadingStatus } from 'redux/appointments/selectors';
import { loadAppointments } from 'redux/appointments/loadAppointments.thunk';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import { resolutionsSelector } from 'redux/resolutions/selectors';
import { loadResolutions } from 'redux/resolutions/loadResolutions.thunk';
import { Appointment, IAppointmentForDoctor } from 'types/appointments';
import { Resolution } from 'types/resolutions';
import { userRoleSelector } from 'redux/auth/selectors';

const findResolution = (app_id: string, resolutionArray: Resolution<string>[]) => {
  const res = resolutionArray.find((item) => item.appointment_id === app_id);
  return res || null;
};

const PatientsList = function () {
  const patients = useAppSelector(appointmentsList);
  const loading = useAppSelector(loadingStatus);
  const resolutions = useAppSelector(resolutionsSelector);
  const role = useAppSelector(userRoleSelector);

  const dispatch = useAppDispatch();

  function isForDoctor(apps: Appointment[]): apps is IAppointmentForDoctor[] {
    return (apps as IAppointmentForDoctor[]) !== undefined;
  }

  useEffect(() => {
    if (role) {
      dispatch(loadAppointments(role));
      dispatch(loadResolutions(role));
    }
  }, []);

  if (loading) {
    return <LoadingBlock />;
  }
  if (patients.length > 0) {
    return (
      <CardList>
        {isForDoctor(patients) && patients.map((listItem: IAppointmentForDoctor) => (
          <PatientCardContainer
            resolution={resolutions ? findResolution(listItem.id, resolutions) : null}
            key={listItem.id}
            listItem={listItem}
            role={role}
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
