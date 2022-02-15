import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="navbar">
      <ul className="nav-items">
        <li>
          <Link className="menu-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/CalcuPage">
            Calculator
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/quotes">
            Quotes
          </Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  </>
);

export default Navbar;
