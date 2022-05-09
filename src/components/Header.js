import React from 'react';

import { Link, Outlet } from 'react-router-dom';

import Pinwheel from './Pinwheel';

export default function Header() {
  return (
    <>
      <nav>
        <div className="logo">
          <Pinwheel />
          <Link to={'/'}>Auth</Link>
        </div>

        <div className="column">
          <Link to="/login" className="nav-link">
            log in
          </Link>
          <Link to="/register" className="nav-link">
            register
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
