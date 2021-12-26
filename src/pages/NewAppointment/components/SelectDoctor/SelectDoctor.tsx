import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormikContext } from 'formik';
import { CustomSelect, ErrorMessage } from 'components';
import { Labels, Placeholders } from 'pages/NewAppointment/dictionary';
import { IFormNewAppointment } from 'pages/NewAppointment/interface';
import { SingleValue } from 'react-select';
import { useAppSelector } from 'redux/hooks/hooks';
import { doctorsListSelector, doctorsSpecializationsSelector } from 'redux/doctors/selectors';
import loadSpecializations from 'redux/doctors/loadSpecializations.thunk';
import loadDoctorsName from 'redux/doctors/loadDoctorsName.thunk';
import { StyledLabel, StyledSelectDoctor, StyledTextarea } from './styled';

type OptionsType = {
  label: string;
  value: string;
};

const SelectDoctor = function () {
  const specializations = useAppSelector(doctorsSpecializationsSelector);
  const doctors = useAppSelector(doctorsListSelector);
  const {
    values, setFieldValue, errors, setFieldTouched, handleChange, handleBlur, touched,
  } = useFormikContext<IFormNewAppointment>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSpecializations());
  }, []);

  const onOccupationChange = (value: SingleValue<string | OptionsType>): void => {
    if (typeof value === 'string') {
      setFieldValue('occupation', value);
      dispatch(loadDoctorsName(value));
    } else if (value) {
      setFieldValue('occupation', value.value);
      dispatch(loadDoctorsName(value.value));
    }
  };

  const onDoctorChange = (value: SingleValue<string | OptionsType>): void => {
    if (typeof value === 'string') {
      setFieldValue('doctor', value);
    } else if (value) {
      setFieldValue('doctor', value.value);
    }
  };

  return (
    <StyledSelectDoctor>
      <StyledLabel htmlFor="occupation">
        {Labels.OCCUPATION}
        <CustomSelect
          name="occupation"
          id="occupation"
          placeholder={Placeholders.OCCUPATION}
          value={values.occupation}
          onChange={onOccupationChange}
          onBlur={() => setFieldTouched('occupation', true)}
          touched={touched.occupation}
          options={specializations}
        />
        {(touched.occupation && errors.occupation) && (
        <ErrorMessage>{errors.occupation}</ErrorMessage>)}
      </StyledLabel>

      <StyledLabel htmlFor="doctor-name" data-testid="doctorSelect">
        {Labels.DOCTOR_NAME}
        <CustomSelect
          isDisabled={!values.occupation}
          id="doctor-name"
          name="doctor"
          placeholder={Placeholders.DOCTOR_NAME}
          value={values.doctor}
          onChange={onDoctorChange}
          options={doctors}
          onBlur={() => setFieldTouched('doctor', true)}
          touched={touched.doctor}
        />

        {(touched.doctor && errors.doctor) && (
        <ErrorMessage>{errors.doctor}</ErrorMessage>)}
      </StyledLabel>

      <StyledLabel htmlFor="reason">
        {Labels.REASON}
        <StyledTextarea
          id="reason"
          name="reason"
          placeholder={Placeholders.REASON}
          value={values.reason}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {(touched.reason && errors.reason) && (
        <ErrorMessage>{errors.reason}</ErrorMessage>)}
      </StyledLabel>

      <StyledLabel htmlFor="note">
        {Labels.NOTE}
        <StyledTextarea
          id="note"
          name="note"
          placeholder={Placeholders.NOTE}
          value={values.note}
          onChange={handleChange}
        />
      </StyledLabel>
    </StyledSelectDoctor>
  );
};

export default SelectDoctor;
