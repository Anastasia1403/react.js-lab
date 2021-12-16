import { regexName, regexPassword } from 'pages/Auth/services';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .max(15, 'Must be 15 characters or less')
    .matches(regexName, 'Only English letters')
    .required('Required field'),
  lastName: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .max(20, 'Must be 20 characters or less')
    .matches(regexName, 'Only English letters')
    .required('Required field'),
  email: Yup.string().email('Invalid email address').required('Required field'),
  password: Yup.string()
    .min(6, 'Must be 6 characters or more')
    .matches(regexPassword, 'Only English letters, symbols and numbers')
    .required('Required field'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must be equals')
    .required('Required field'),
});

export default validationSchema;
