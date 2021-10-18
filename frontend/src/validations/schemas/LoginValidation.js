import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must have at least 8 characters')
    .max(30, 'Password must be 30 or less characters long')
    .required('Password is required'),
});

export default loginSchema;
