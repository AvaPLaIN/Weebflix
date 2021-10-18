import { ErrorMessage, useField } from 'formik';

const Input = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props} autoComplete="off" />
      <ErrorMessage name={field.name} />
    </div>
  );
};

export default Input;
