import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import login from 'redux/auth/login.thunk';
import { ButtonSubmit, FormContainer, Input } from 'components';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import { USER_PATH } from 'routes/constants';
import { isLoggedInSelector } from 'redux/auth/selectors';
import validationSchema from './validationSchema';
import ArrowIcon from './img/angle-right-b.svg';

interface IInitialValues {
  email: string,
  password: string,
}

const SignInForm = function () {
  const dispatch = useAppDispatch();

  const isLoggedInStatus = useAppSelector(isLoggedInSelector);
  const history = useHistory();

  useEffect(() => {
    if (isLoggedInStatus && localStorage.getItem('tokenData')) {
      history.push(USER_PATH.MAIN);
    }
  }, [isLoggedInStatus]);

  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values: IInitialValues) => {
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
        <FormContainer data-testid="form" onSubmit={formik.handleSubmit}>
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

          <ButtonSubmit type="submit">
            <span>Sign In</span>
            <img src={ArrowIcon} alt="arrow" />
          </ButtonSubmit>
        </FormContainer>
      )}
    </Formik>
  );
};

export default SignInForm;
