import { useState } from 'react';
import LoginForm from '../../validations/forms/login/LoginForm';
import RegisterForm from '../../validations/forms/register/RegisterForm';
import { AuthComponent } from './Auth.styled';

const Auth = ({ setUser }) => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <AuthComponent>
      {showLogin ? (
        <LoginForm setShowLogin={setShowLogin} setUser={setUser} />
      ) : (
        <RegisterForm setShowLogin={setShowLogin} />
      )}
    </AuthComponent>
  );
};

export default Auth;
