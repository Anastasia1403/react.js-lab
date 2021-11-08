import React from "react";
import { useFormik } from "formik";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";

function FormikSignIn(props) {
  const validate = (values) => {
    const errors = {};

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

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const user = JSON.parse(localStorage.getItem(values.email));
      if (!user) {
        alert("not registered yet");
        return;
      }
      if (user.password !== values.password) {
        alert("wrong password");
        return;
      }
      props.history.push("/doctor-view");
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

      <ButtonSubmit text="Sign Up" type="submit" />
    </Form>
  );
}

export default FormikSignIn;
