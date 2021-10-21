import Input from '../../../components/input/Input';
import registerSchema from '../../schemas/RegisterValidation';
import { Formik, Form } from 'formik';
import { signup } from '../../../api/user';
import { RegisterComponent } from './RegisterForm.styled';

const RegisterForm = ({ setShowLogin }) => {
  const handleRegisterSubmit = async (registerObject, resetForm) => {
    try {
      await signup(registerObject);
      setShowLogin(true);
    } catch (error) {
      console.error(error);
    }
    resetForm({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <RegisterComponent>
      <h1>Registrieren</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={registerSchema}
        onSubmit={(RegisterObject, { resetForm }) => {
          handleRegisterSubmit(RegisterObject, resetForm);
        }}
      >
        {(Formik) => (
          <Form className="loginForm">
            <Input type="text" name="name" placeholder="name" />
            <Input type="email" name="email" placeholder="email" />
            <Input type="password" name="password" placeholder="password" />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="password"
            />
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
      <button onClick={() => setShowLogin(true)}>
        Already have an Account? Login here
      </button>
    </RegisterComponent>
  );
};

export default RegisterForm;
