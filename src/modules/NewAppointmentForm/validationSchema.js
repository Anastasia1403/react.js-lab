import * as Yup from 'yup';

// const today = new Date();

const validationSchema = Yup.object().shape({
  date: Yup.date()
    .required('Choose date of visit'),
  time: Yup.string()
    .required('Choose time of visit'),
  occupation: Yup.string().required('Required field'),
  doctor: Yup.string()
    .required('Required field'),
  reason: Yup.string()
    .required('Please write reason of your visit')
    .min(6, 'Must be 6 characters or more'),
  note: Yup.string()
    .max(100, 'Must be 100 characters or less'),

});

export default validationSchema;
