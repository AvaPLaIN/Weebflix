import { useState } from 'react';
import LoginForm from '../../validations/forms/LoginForm';
import RegisterForm from '../../validations/forms/RegisterForm';

const Auth = ({ setUser }) => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      {showLogin ? (
        <LoginForm setShowLogin={setShowLogin} setUser={setUser} />
      ) : (
        <RegisterForm setShowLogin={setShowLogin} />
      )}
    </div>
  );
};

export default Auth;
