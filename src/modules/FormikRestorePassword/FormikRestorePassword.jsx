import React from "react";
import { useFormik } from "formik";
import Form from "../../components/Form/Form";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";
import Input from "../../components/Input/Input";

function FormikRestorePassword(props) {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      props.resetPassword(values.email);
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

      <ButtonSubmit text="Restore Password" type="submit" />
    </Form>
  );
}

export default FormikRestorePassword;
