import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getDoctors from '../../redux/getDoctors/thunk';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import CustomSelect from '../../components/Select/Select';
import doctorsList from '../../redux/getDoctors/selectors';
import doctorsSpecializations from '../../redux/getSpecializations/selectors';
import { getSpecializations } from '../../redux/getSpecializations/thunk';
import { StyledLabel, StyledSelectDoctor, StyledTextarea } from './styled';

const SelectDoctor = function ({ formik }) {
  const specializations = useSelector(doctorsSpecializations);
  const doctors = useSelector(doctorsList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecializations());
  }, []);

  const onOccupationChange = (value) => {
    formik.setFieldValue('occupation', value.value);
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
          value={formik.values.occupation}
          onChange={onOccupationChange}
          onBlur={() => formik.setFieldTouched('occupation', true)}
          touched={formik.touched.occupation}
          options={specializations}
        />

        {(formik.touched.occupation && formik.errors.occupation) && (
        <ErrorMessage>{formik.errors.occupation}</ErrorMessage>)}
      </StyledLabel>

      <StyledLabel htmlFor="doctor-name">
        Doctor`s Name*
        <CustomSelect
          id="doctor-name"
          name="doctor"
          placeholder="Choose doctor"
          value={formik.values.doctor}
          onChange={(value) => formik.setFieldValue('doctor', value.value)}
          options={doctors}
          onBlur={() => formik.setFieldTouched('doctor', true)}
          touched={formik.touched.doctor}

        />
        {(formik.touched.doctor && formik.errors.doctor) && (
        <ErrorMessage>{formik.errors.doctor}</ErrorMessage>)}
      </StyledLabel>

      <StyledLabel htmlFor="reason">
        Reason for the visit*
        <StyledTextarea
          id="reason"
          name="reason"
          placeholder="Write reason for the visit"
          value={formik.values.reason}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.reason}
          error={formik.errors.reason}
        />
        {(formik.touched.reason && formik.errors.reason) && (
          <ErrorMessage>{formik.errors.reason}</ErrorMessage>)}
      </StyledLabel>

      <StyledLabel htmlFor="note">
        Note
        <StyledTextarea
          id="note"
          name="note"
          placeholder="Leave a note if needed"
          value={formik.values.note}
          onChange={formik.handleChange}
        />
      </StyledLabel>
    </StyledSelectDoctor>
  );
};

export default SelectDoctor;
