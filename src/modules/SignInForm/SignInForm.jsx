import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';
import Input from '../../components/Input/Input';
import FormContainer from '../../components/FormContainer/FormContainer';
import { ReactComponent as ArrowIcon } from './img/angle-right-b.svg';
import validationSchema from './validationSchema';
import { isLoggedIn, error } from '../../redux/login/selectors';
import login from '../../redux/login/thunk';

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
            {/* <button
        type="submit"
        data-testid="submit"
        onClick={formik
          .handleSubmit}
      >
        Sign Up

      </button> */}
            <ButtonSubmit type="submit" margin="8px 0 32px">
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
