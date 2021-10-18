import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup.string().required('Name ist required'),
  email: yup.string().email().required('Email ist required'),
  password: yup.string().min(8).max(30).required('Password ist required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Password ist required'),
});

export default registerSchema;
