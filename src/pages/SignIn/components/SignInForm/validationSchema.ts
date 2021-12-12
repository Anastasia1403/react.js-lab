import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required field'),
  password: Yup.string()
    .required('Required field'),
});

export default validationSchema;
