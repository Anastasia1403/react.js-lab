import React, { useState } from 'react';
import DropDown from 'components/DropDown/DropDown';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import ReactDOM from 'react-dom';
import { useAppDispatch } from 'redux/hooks/hooks';
import { deleteAppointment, loadAppointments } from 'redux/appointments/loadAppointments.thunk';
import { createResolution } from 'redux/resolutions/createResolution.thunk';
// import { AsyncThunk } from '@reduxjs/toolkit';
// import { INewResolution } from 'types/resolutions';
import { editResolution } from 'redux/resolutions/editResolution.thunk';
import { CardProps, IDropDownItem } from './types';
import { PatientCard } from '.';
import { Container } from './styled';

const root = document.getElementById('root')!;

const PatientCardContainer = function ({ listItem, resolution, role }: CardProps) {
  const { patient, id } = listItem;

  const patientName = `${patient.first_name} ${patient.last_name}`;

  const dispatch = useAppDispatch();

  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const onDropDownChangeVisible = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const [modal, setModal] = useState({
    isOpen: false,
    name: '',
    title: '',
    modalCallback: (values: any) => console.log(values),
  });
  const onModalOpen = (
    name: string,
    title: string,
    modalCallback: (values: any) => void,
  ) => {
    setModal({
      ...modal, isOpen: !modal.isOpen, name, title, modalCallback,
    });
  };

  const onModalClose = () => {
    setModal({
      ...modal, isOpen: !modal.isOpen, name: '', title: '',
    });
  };

  const handleEditResolution = (values: any) => {
    const val = { id: values.resolutionID, resolution: values.resolution };
    dispatch(editResolution(val));
    onModalClose();
  };

  const handleCreateResolution = (values: any) => {
    // eslint-disable-next-line
            // debugger
    const val = { appointmentID: values.appointmentID, resolution: values.resolution };
    dispatch(createResolution(val));
    onModalClose();
  };
  const patientCardDropDownInfo: IDropDownItem[] = [
    {
      name: 'Create a Resolution',
      isActive: Boolean(!resolution),
      callback: () => {
        onModalOpen(patientName, 'Create a Resolution', handleCreateResolution);
        onDropDownChangeVisible();
      },

    },
    {
      name: 'Edit a Resolution',
      isActive: Boolean(resolution),
      callback: () => {
        onModalOpen(patientName, 'Edit a Resolution', handleEditResolution);
        onDropDownChangeVisible();
      },
    },
    {
      name: 'Delete',
      isActive: true,
      callback: () => {
        onDropDownChangeVisible();
        dispatch(deleteAppointment(id));
        if (role) dispatch(loadAppointments(role));
      },
    },
  ];

  return (
    <Container>
      <PatientCard
        listItem={listItem}
        resolution={resolution ? resolution.resolution : null}
        // role={role}
        onDropDownChangeVisible={onDropDownChangeVisible}
      />
      <DropDown
        isVisible={isDropDownVisible}
        content={patientCardDropDownInfo}
      />
      {ReactDOM.createPortal(
        <ModalWindow
          modalCallback={modal.modalCallback}
          isOpen={modal.isOpen}
          onModalClose={onModalClose}
          title={modal.title}
          name={modal.name}
          appointmentID={id}
          resolution={resolution}

        />,
        root,
      )}

    </Container>

  );
};

export default PatientCardContainer;
