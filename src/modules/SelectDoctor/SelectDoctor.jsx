import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormikContext } from 'formik';
import doctorsSpecializations from 'redux/getSpecializations/selectors';
import getDoctors from 'redux/getDoctors/thunk';
import doctorsList from 'redux/getDoctors/selectors';
import { getSpecializations } from 'redux/getSpecializations/thunk';
import { CustomSelect, ErrorMessage } from 'components';
import { StyledLabel, StyledSelectDoctor, StyledTextarea } from './styled';

const SelectDoctor = function () {
  const specializations = useSelector(doctorsSpecializations);
  const doctors = useSelector(doctorsList);
  const {
    values, setFieldValue, errors, setFieldTouched, handleChange, handleBlur, touched,
  } = useFormikContext();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecializations());
  }, []);

  const onOccupationChange = (value) => {
    setFieldValue('occupation', value.value);
    dispatch(getDoctors(value.value));
  };

  return (
    <StyledSelectDoctor>

      <StyledLabel htmlFor="occupation">
        Occupation*
        <CustomSelect
          name="occupation"
          id="occupation"
          placeholder="Choose doctor`s occupation"
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
        Doctor`s Name*
        <CustomSelect
          isDisabled={!values.occupation}
          id="doctor-name"
          name="doctor"
          placeholder="Choose doctor"
          value={values.doctor}
          onChange={(value) => setFieldValue('doctor', value.value)}
          options={doctors}
          onBlur={() => setFieldTouched('doctor', true)}
          touched={touched.doctor}
        />

        {(touched.doctor && errors.doctor) && (
        <ErrorMessage>{errors.doctor}</ErrorMessage>)}
      </StyledLabel>

      <StyledLabel htmlFor="reason">
        Reason for the visit*
        <StyledTextarea
          id="reason"
          name="reason"
          placeholder="Write reason for the visit"
          value={values.reason}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.reason}
          error={errors.reason}
        />
        {(touched.reason && errors.reason) && (
        <ErrorMessage>{errors.reason}</ErrorMessage>)}
      </StyledLabel>

      <StyledLabel htmlFor="note">
        Note
        <StyledTextarea
          id="note"
          name="note"
          placeholder="Leave a note if needed"
          value={values.note}
          onChange={handleChange}
        />
      </StyledLabel>
    </StyledSelectDoctor>
  );
};

export default SelectDoctor;
