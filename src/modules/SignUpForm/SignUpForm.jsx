import React from 'react';
import { useFormik } from 'formik';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';
import { ReactComponent as ArrowIcon } from './img/angle-right-b.svg';
import validationSchema from './validationSchema';

const SignUpForm = function ({ history }) {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      localStorage.setItem(values.email, JSON.stringify(values));
      history.push('/sign-in');
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        name="firstName"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.firstName}
        touched={formik.touched.firstName}
        error={formik.errors.firstName}
      />

      <Input
        name="lastName"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        touched={formik.touched.lastName}
        value={formik.values.lastName}
        error={formik.errors.lastName}
      />

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

      <Input
        name="confirmPassword"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        touched={formik.touched.confirmPassword}
        value={formik.values.confirmPassword}
        error={formik.errors.confirmPassword}
      />

      <ButtonSubmit type="submit" margin="8px 0 32px">
        <span>Sign Up</span>
        <ArrowIcon alt="arrow" />
      </ButtonSubmit>
    </Form>
  );
};

export default SignUpForm;
