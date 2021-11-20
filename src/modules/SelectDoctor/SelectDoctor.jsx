import React, { useEffect, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import CustomSelect from '../../components/Select/Select';
import findDoctorByName from '../../utils/findDoctorByName';
import { doctorList, doctorsNameInitial, occupations } from '../NewAppointment/services';
import { StyledLabel, StyledSelectDoctor, StyledTextarea } from './styled';

const createOptionsArrayForSelect = (optionsArr) => optionsArr
  .map((item) => ({ value: item, label: item }));

const SelectDoctor = function ({ formik }) {
  const [doctorsArray, setDoctorsArray] = useState(doctorsNameInitial);

  useEffect(() => {
    const doctors = [];
    doctorList.map((doctor) => {
      if (doctor.occupation === formik.values.occupation || !formik.values.occupation) {
        const name = `${doctor.firstName} ${doctor.lastName}`;
        doctors.push(name);
      } return doctors;
    });
    setDoctorsArray(doctors);
  }, [formik.values.occupation]);

  const onChangeName = (value) => {
    formik.setFieldValue('doctor', value.value);
    if (formik.values.occupation) return null;
    // set occupation if doctor name chose before occupation
    const doctor = findDoctorByName(value.value);
    formik.setFieldValue('occupation', doctor.occupation);
    return doctor.occupation;
  };

  const optionsDoctors = createOptionsArrayForSelect(doctorsArray);
  const optionsOccupations = createOptionsArrayForSelect(occupations);
  return (
    <StyledSelectDoctor>

      <StyledLabel htmlFor="occupation">
        Occupation*
        <CustomSelect
          name="occupation"
          id="occupation"
          placeholder="Choose doctor`s occupation"
          value={formik.values.occupation}
          onChange={(value) => formik.setFieldValue('occupation', value.value)}
          onBlur={() => formik.setFieldTouched('occupation', true)}
          touched={formik.touched.occupation}
          options={optionsOccupations}
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
          onChange={onChangeName}
          options={optionsDoctors}
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
