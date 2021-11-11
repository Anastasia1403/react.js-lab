import React from 'react';
import { useFormik } from 'formik';
import Form from '../../components/Form/Form';
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';
import Input from '../../components/Input/Input';
import { ReactComponent as ArrowIcon } from './img/angle-right-b.svg';
import validationSchema from './validationSchema';

const RestorePasswordForm = function ({ resetPassword }) {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      resetPassword(values.email);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
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
    </Form>
  );
};

export default RestorePasswordForm;
