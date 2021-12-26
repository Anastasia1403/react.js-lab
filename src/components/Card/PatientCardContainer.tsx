import React, { useState } from 'react';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import ReactDOM from 'react-dom';
import { useAppDispatch } from 'redux/hooks/hooks';
import { deleteAppointment, loadAppointments } from 'redux/appointments/loadAppointments.thunk';
import { createResolution } from 'redux/resolutions/createResolution.thunk';
import { editResolution } from 'redux/resolutions/editResolution.thunk';
import { IChangedResolution } from 'types/resolutions';
import { CardProps, IDropDownItem } from './types';
import { PatientCard } from '.';
import { Container, PatientCardDropDown } from './styled';

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
    // eslint-disable-next-line no-console
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

  const handleEditResolution = (values: IChangedResolution) => {
    const val = { resolutionID: values.resolutionID, resolution: values.resolution };
    dispatch(editResolution(val));
    onModalClose();
  };

  const handleCreateResolution = (values: IChangedResolution) => {
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
        onDropDownChangeVisible={onDropDownChangeVisible}
      />
      <PatientCardDropDown
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
