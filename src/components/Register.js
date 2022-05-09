import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { setUser } from 'store/slices/userSlice';

import Form from './Form';

export default function Register() {
  const auth = getAuth();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
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
      <Form title="register" handleClick={handleRegister} />
    </div>
  );
}
