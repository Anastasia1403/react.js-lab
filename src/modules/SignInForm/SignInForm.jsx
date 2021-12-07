import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { isLoggedIn, error } from 'redux/login/selectors';
import login from 'redux/login/thunk';
import { ButtonSubmit, FormContainer, Input } from 'components';
import validationSchema from './validationSchema';
import { ReactComponent as ArrowIcon } from './img/angle-right-b.svg';

const SignInForm = function () {
  const dispatch = useDispatch();

  const isLoggedInStatus = useSelector(isLoggedIn);
  const errorMessage = useSelector(error);
  const history = useHistory();

  useEffect(() => {
    if (isLoggedInStatus) {
      history.push('/user-view');
    }
  }, [isLoggedInStatus]);

  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values) => {
    const userData = {
      userName: values.email,
      password: values.password,
    };
    dispatch(login(userData));
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
            {error && <div>{errorMessage}</div>}

            <ButtonSubmit type="submit">
              <span>Sign In</span>
              <ArrowIcon alt="arrow" />
            </ButtonSubmit>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
