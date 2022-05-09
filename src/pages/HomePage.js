import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';
import { deleteUser } from '../store/slices/userSlice';

export default function HomePage() {
  const [timer, setTimer] = useState(5);
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth) {
      if (timer === 0) navigate('/login');
      const time = setTimeout(() => {
        setTimer((p) => p > 0 && p - 1);
      }, 1000);

      return () => clearTimeout(time);
    }
  }, [timer, isAuth]);

  console.log(isAuth);

  return (
    <>
      {!isAuth ? (
        <>
          <h1>Hey! You need to be logged in to enjoy this website.</h1>
          <h3>
            You're gonna be redirected to <Link to={'/login'}>login page</Link>{' '}
            in {timer} seconds
          </h3>
        </>
      ) : (
        <>
          <h1>Thanks for logging in!</h1>
          <button
            onClick={() => {
              dispatch(deleteUser());
            }}
          >
            Log out
          </button>
        </>
      )}
    </>
  );
}
