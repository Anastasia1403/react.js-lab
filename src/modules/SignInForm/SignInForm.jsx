import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';
import Input from '../../components/Input/Input';
import Form from '../../components/Form/Form';
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

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const userData = {
        userName: values.email,
        password: values.password,
      };
      dispatch(login(userData));
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
      {error && <div>{errorMessage}</div>}
      <ButtonSubmit type="submit" margin="8px 0 32px">
        <span>Sign Up</span>
        <ArrowIcon alt="arrow" />
      </ButtonSubmit>
    </Form>
  );
};

export default SignInForm;
