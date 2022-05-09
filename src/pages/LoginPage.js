import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import Login from 'components/Login';
import { setUser } from 'store/slices/userSlice';
import useAuth from 'hooks/useAuth';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  function loginGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        dispatch(
          setUser({
            email: result.user.email,
            id: credential.idToken,
            token: credential.accessToken,
          })
        );

        navigate('/', { replace: true });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <>
      {isAuth ? (
        <h1>You're already logged in!</h1>
      ) : (
        <>
          <Login />
          <button onClick={loginGoogle} className="google-button">
            Or log in with Google{' '}
            <img src="/google-icon.svg" alt="google icon" />
          </button>
          <h1>Not registered yet?</h1> <Link to="/register">Register</Link>
        </>
      )}
    </>
  );
}
