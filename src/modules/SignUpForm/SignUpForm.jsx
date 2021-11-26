import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';
import { ReactComponent as ArrowIcon } from './img/angle-right-b.svg';
import validationSchema from './validationSchema';
import { registration } from '../../redux/registration/slice';
import { error, status } from '../../redux/registration/selectors';

const SignUpForm = function ({ history }) {
  const errorMessage = useSelector(error);
  const statusText = useSelector(status);

  const dispatch = useDispatch();

  useEffect(() => {
    if (statusText === 'Created') {
      history.push('/sign-in');
    }
  }, [statusText]);

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
      const userData = {
        userName: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
      };
      dispatch(registration(userData));
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
      {errorMessage && <div>{errorMessage}</div>}
      <ButtonSubmit type="submit" margin="8px 0 32px">
        <span>Sign Up</span>
        <ArrowIcon alt="arrow" />
      </ButtonSubmit>
    </Form>
  );
};

export default SignUpForm;
