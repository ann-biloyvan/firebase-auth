import { Link } from 'react-router-dom';

import Register from 'components/Register';
import useAuth from 'hooks/useAuth';

export default function RegisterPage() {
  const { isAuth } = useAuth();

  return (
    <>
      {isAuth ? (
        <h1>You're already registered and logged in!</h1>
      ) : (
        <>
          <Register />
          <h1>Already have an account?</h1> <Link to="/login">Log in</Link>
        </>
      )}
    </>
  );
}
