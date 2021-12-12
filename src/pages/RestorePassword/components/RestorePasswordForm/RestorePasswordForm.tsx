import React from 'react';
import { Formik } from 'formik';
import { ButtonSubmit, FormContainer, Input } from 'components';
import ArrowIcon from './img/angle-right-b.svg';
import validationSchema from './validationSchema';

interface IInitialValues {
  email: string
}
interface Props {
  resetPassword: (email: string) => void
}
const RestorePasswordForm = function ({ resetPassword }: Props) {
  const initialValues: IInitialValues = {
    email: '',
  };
  const handleSubmit = (values: IInitialValues) => {
    resetPassword(values.email);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <FormContainer>
          <Input
            name="email"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            touched={formik.touched.email}
            value={formik.values.email}
            error={formik.errors.email}
          />
          <ButtonSubmit type="submit">
            <span>Restore Password</span>
            <img src={ArrowIcon} alt="arrow" />
          </ButtonSubmit>
        </FormContainer>

      )}
    </Formik>

  );
};

export default RestorePasswordForm;
