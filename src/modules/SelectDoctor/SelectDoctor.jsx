import React from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import CustomSelect from '../../components/Select/Select';
import { occupations } from '../NewAppointment/services';
import { StyledLabel, StyledSelectDoctor, StyledTextarea } from './styled';

const createOptionsArrayForSelect = (optionsArr) => {
  const optionsArrayForSelect = [];
  optionsArr.map((item) => {
    const obj = { value: item, label: item };
    optionsArrayForSelect.push(obj);
    return null;
  });
  return optionsArrayForSelect;
};

const SelectDoctor = function ({ formik, DoctorList }) {
  // create list of doctors according to choosen occupation
  const doctorsArray = [];

  DoctorList.map((doctor) => {
    if (doctor.occupation === formik.values.occupation || !formik.values.occupation) {
      const name = `${doctor.firstName} ${doctor.lastName}`;
      doctorsArray.push(name);
    }
    return null;
  });

  // function for set occupation if doctor name chose before occupation
  const findOccupationForDoctor = (nameDoctor, doctorArr) => {
    if (!nameDoctor) return null;
    const doctor = doctorArr.find((item) => {
      const name = `${item.firstName} ${item.lastName}`;
      return name === nameDoctor;
    });
    formik.setFieldValue('occupation', doctor.occupation);
    return doctor.occupation;
  };

  const optionsDoctors = createOptionsArrayForSelect(doctorsArray);
  const optionsOccupations = createOptionsArrayForSelect(occupations);
  return (
    <StyledSelectDoctor>

      <StyledLabel htmlFor="occupation">
        Occupation
        <CustomSelect
          name="occupation"
          id="occupation"
          placeholder="Choose doctor`s occupation"
          value={formik.values.occupation
          || findOccupationForDoctor(formik.values.doctor, DoctorList)}
          onChange={(value) => formik.setFieldValue('occupation', value.value)}
          onBlur={() => formik.setFieldTouched('occupation', true)}
          touched={formik.touched.occupation}
          options={optionsOccupations}
        />

        {(formik.touched.occupation && formik.errors.occupation) && (
        <ErrorMessage>{formik.errors.occupation}</ErrorMessage>)}
      </StyledLabel>

      <StyledLabel htmlFor="doctor-name">
        Doctor`s Name
        <CustomSelect
          id="doctor-name"
          name="doctor"
          placeholder="Choose doctor"
          value={formik.values.doctor}
          onChange={(value) => formik.setFieldValue('doctor', value.value)}
          options={optionsDoctors}
          onBlur={() => formik.setFieldTouched('doctor', true)}
          touched={formik.touched.doctor}

        />
        {(formik.touched.doctor && formik.errors.doctor) && (
        <ErrorMessage>{formik.errors.doctor}</ErrorMessage>)}
      </StyledLabel>

      <StyledLabel htmlFor="reason">
        Reason for the visit
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
