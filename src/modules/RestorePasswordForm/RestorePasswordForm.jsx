import React from 'react';
import { Formik, Form } from 'formik';
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';
import Input from '../../components/Input/Input';
import { ReactComponent as ArrowIcon } from './img/angle-right-b.svg';
import validationSchema from './validationSchema';
import FormContainer from '../../components/FormContainer/FormContainer';

const RestorePasswordForm = function ({ resetPassword }) {
  const initialValues = {
    email: '',
  };
  const handleSubmit = (values) => {
    resetPassword(values.email);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <FormContainer>

            <Input
              name="email"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              touched={formik.touched.email}
              value={formik.values.email}
              error={formik.errors.email}
            />

            <ButtonSubmit type="submit" margin="8px 0 32px">
              <span>Restore Password</span>
              <ArrowIcon alt="arrow" />
            </ButtonSubmit>
          </FormContainer>
        </Form>
      )}
    </Formik>

  );
};

export default RestorePasswordForm;
