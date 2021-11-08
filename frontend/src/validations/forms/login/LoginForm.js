import { useState } from 'react';
import Input from '../../../components/input/Input';
import loginSchema from '../../schemas/LoginValidation';
import { Formik, Form } from 'formik';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { signin } from '../../../api/user';
import { LoginComponent } from './LoginForm.styled';
import Loading from '../../../components/loading/Loading';

//! IMPORT REDUX
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/ducks/user';

const LoginForm = ({ setUser, setShowLogin }) => {
  //! INIT
  const dispatch = useDispatch();
  const history = useHistory();

  //! USE-REF
  const [inSubmit, setInSubmit] = useState(false);

  const onLoginSuccess = (res) => {
    setUser(res);
    localStorage.setItem('user', JSON.stringify(res));
    history.push('/');
  };

  const onFailureSuccess = (error) => {
    console.error(error);
  };

  const handleLoginSubmit = async (loginObject, resetForm) => {
    dispatch(loginUser(loginObject));
    setInSubmit(true);
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
    setInSubmit(false);
  };

  return (
    <LoginComponent>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(loginObject, { resetForm }) => {
          handleLoginSubmit(loginObject, resetForm);
        }}
      >
        {(Formik) => (
          <Form className="loginForm">
            <Input type="email" name="email" placeholder="email" />
            <Input type="password" name="password" placeholder="password" />
            <button disabled={inSubmit} type="submit">
              {inSubmit ? <Loading /> : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
      <GoogleLogin
        clientId="174070686882-v2sgqaplluhhde3scogm6cqss8cu5u9i.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={onLoginSuccess}
        onFailure={onFailureSuccess}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
        disabled
      />
      <button onClick={() => setShowLogin(false)} className="linkRegister">
        New? Click here to register!
      </button>
    </LoginComponent>
  );
};

export default LoginForm;
