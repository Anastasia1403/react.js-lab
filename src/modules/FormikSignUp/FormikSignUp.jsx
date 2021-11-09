import React from "react";
import { useFormik } from "formik";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import arrow from "./img/angle-right-b.svg";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";

function FormikSignUp(props) {
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length < 2) {
      errors.firstName = "Must be 2 characters or more";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length < 2) {
      errors.lastName = "Must be 2 characters or more";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Must be 6 characters or more";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords must be equals";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values, event) => {
      localStorage.setItem(values.email, JSON.stringify(values));
      console.log(localStorage);
      props.history.push("/sign-up");
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
      <span>Sign In</span>
      <img src={arrow} alt="arrow"/> 
      </ButtonSubmit>
    </Form>
  );
}

export default FormikSignUp;
