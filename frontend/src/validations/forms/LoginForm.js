import Input from '../../components/input/Input';
import loginSchema from '../schemas/LoginValidation';
import { Formik, Form } from 'formik';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { signin } from '../../api/user';

const LoginForm = ({ setUser, setShowLogin }) => {
  const history = useHistory();

  const onLoginSuccess = (res) => {
    setUser(res);
    localStorage.setItem('user', JSON.stringify(res));
    history.push('/');
  };

  const onFailureSuccess = (error) => {
    console.error(error);
  };

  const handleLoginSubmit = async (loginObject, resetForm) => {
    try {
      const res = await signin(loginObject);
      if (res) {
        setUser(res);
        localStorage.setItem('user', JSON.stringify(res));
        history.push('/home');
      }
    } catch (error) {
      console.error(error);
    }
    resetForm({ email: '', password: '' });
  };

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(loginObject, { resetForm }) => {
          handleLoginSubmit(loginObject, resetForm);
        }}
      >
        {(Formik) => (
          <Form>
            <Input type="email" name="email" placeholder="email" />
            <Input type="password" name="password" placeholder="password" />
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
      <GoogleLogin
        clientId="174070686882-v2sgqaplluhhde3scogm6cqss8cu5u9i.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onLoginSuccess}
        onFailure={onFailureSuccess}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
      />
      <button onClick={() => setShowLogin(false)}>Registrieren</button>
    </div>
  );
};

export default LoginForm;
