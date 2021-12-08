import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { error, status } from 'redux/registration/selectors';
import registration from 'redux/registration/thunk';
import { ButtonSubmit, FormContainer, Input } from 'components';
import { ReactComponent as ArrowIcon } from './img/angle-right-b.svg';
import validationSchema from './validationSchema';

const SignUpForm = function () {
  const errorMessage = useSelector(error);
  const statusText = useSelector(status);
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    if (statusText === 'Created') {
      /* eslint-disable no-alert */
      alert('You are registered successfully');
      history.push('/sign-in');
    }
  }, [statusText]);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const handleSubmit = (values) => {
    const userData = {
      userName: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
    };
    dispatch(registration(userData));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form data-testid="form">
          <FormContainer>
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
            <ButtonSubmit type="submit">
              <span>Sign Up</span>
              <ArrowIcon alt="arrow" />
            </ButtonSubmit>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
