import { EmptyBlock, LoadingBlock } from 'components';
import { userViewDict } from 'pages/UserView/dictionary';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import { isLoadingSelector, resolutionsSelector } from 'redux/resolutions/selectors';
import { loadResolutions } from 'redux/resolutions/loadResolutions.thunk';
import { IResolutionForPatient, Resolution } from 'types/resolutions';
import { userRoleSelector } from 'redux/auth/selectors';
import {
  StyledTable, TableData, TableHeader, TableRow,
} from './styled';

function isForPatient(res: Resolution<string>): res is IResolutionForPatient<string> {
  return (res as IResolutionForPatient<string>).doctor !== undefined;
}

const Resolutions = function () {
  const resolutions = useAppSelector(resolutionsSelector);
  const isLoading = useAppSelector(isLoadingSelector);
  const role = useAppSelector(userRoleSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (role) dispatch(loadResolutions(role));
  }, []);

  if (isLoading) {
    return <LoadingBlock />;
  }
  if (resolutions && resolutions.length > 0) {
    return (
      <StyledTable>
        <TableRow>
          <TableHeader width="15%">First Name</TableHeader>
          <TableHeader width="15%">Last Name</TableHeader>
          <TableHeader width="34%">Resolution</TableHeader>
          <TableHeader width="12%">Visit Date</TableHeader>
          <TableHeader width="12%">Next Visit</TableHeader>
          <TableHeader width="12%">Actions</TableHeader>
        </TableRow>
        { resolutions.map((item: Resolution<string>) => (
          <TableRow key={item.id}>
            <TableData>
              {isForPatient(item) ? item.doctor.first_name
                : item.patient.first_name}
            </TableData>
            <TableData>
              {isForPatient(item) ? item.doctor.last_name
                : item.patient.last_name}
            </TableData>
            <TableData>{item.resolution}</TableData>
            <TableData>{item.visit_date}</TableData>
            <TableData>{item.next_appointment_date}</TableData>
            <TableData>111</TableData>
          </TableRow>
        ))}
      </StyledTable>
    );
  } return <EmptyBlock text1={userViewDict.empty.resolutions} />;
};

export default Resolutions;
