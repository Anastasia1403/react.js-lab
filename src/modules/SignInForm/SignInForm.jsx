import React from 'react';
import { useFormik } from 'formik';
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';
import Input from '../../components/Input/Input';
import Form from '../../components/Form/Form';
import { ReactComponent as ArrowIcon } from './img/angle-right-b.svg';
import validationSchema from './validationSchema';

const SignInForm = function ({ history }) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const user = JSON.parse(localStorage.getItem(values.email));
      if (!user) {
        alert('not registered yet');
        return;
      }
      if (user.password !== values.password) {
        alert('wrong password');
        return;
      }
      history.push('/doctor-view');
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

      <Input
        name="password"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        touched={formik.touched.password}
        value={formik.values.password}
        error={formik.errors.password}
      />

      <ButtonSubmit type="submit" margin="8px 0 32px">
        <span>Sign Up</span>
        <ArrowIcon alt="arrow" />
      </ButtonSubmit>
    </Form>
  );
};

export default SignInForm;
