import React from 'react';

import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

import { setUser } from 'store/slices/userSlice';

import Form from './Form';

export default function Login() {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/', { replace: true });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <Form title="log in" handleClick={handleLogin} />
    </div>
  );
}
