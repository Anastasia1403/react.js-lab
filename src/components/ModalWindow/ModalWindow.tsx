import { ModalCancelStyledButton, ModalStyledButton } from 'components/ButtonSubmit/styled';
import { Form, Formik } from 'formik';
import React from 'react';
import { IChangedResolution, Resolution } from 'types/resolutions';
import {
  Background, ModalBody, ModalFooter, ModalTitle, Name, StyledLabel, StyledModal, StyledTextarea,
} from './styled';
import { ReactComponent as UserIcon } from './img/user.svg';
import { ReactComponent as CheckIcon } from './img/check.svg';
import { ReactComponent as CloseIcon } from './img/close.svg';

export interface ModalProps {
  isOpen: boolean,
  onModalClose: () => void,
  title: string,
  name: string,
  appointmentID: string,
  modalCallback: (values: any) => void,
  resolution: Resolution<string> | null
}

const ModalWindow = function ({
  isOpen, onModalClose, title, name, appointmentID, modalCallback, resolution,
}:ModalProps) {
  const initialValues: IChangedResolution = {
    resolution: (title === 'Edit a Resolution' && resolution) ? resolution.resolution : '',
    appointmentID,
    resolutionID: (title === 'Edit a Resolution' && resolution) ? resolution.id : '',
  };

  return (
    <Background isOpen={isOpen}>
      <StyledModal>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={(values) => modalCallback(values)}
        >
          {(formik) => (
            <Form
              data-testid="form"
            >
              <ModalBody>
                <ModalTitle>{title}</ModalTitle>
                <Name>
                  <UserIcon />
                  <div>{name}</div>
                </Name>

                <StyledLabel htmlFor="resolution">
                  Resolution
                  <StyledTextarea
                    onChange={formik.handleChange}
                    value={formik.values.resolution}
                    component="textarea"
                    id="resolution"
                    name="resolution"
                  />
                </StyledLabel>
              </ModalBody>

              <ModalFooter>
                <ModalCancelStyledButton type="reset" onClick={onModalClose}>
                  <CloseIcon />
                  <span>Cancel</span>
                </ModalCancelStyledButton>

                <ModalStyledButton type="submit">
                  <CheckIcon />
                  <span>Save</span>
                </ModalStyledButton>

              </ModalFooter>
            </Form>
          )}

        </Formik>

      </StyledModal>
    </Background>
  );
};

export default ModalWindow;
