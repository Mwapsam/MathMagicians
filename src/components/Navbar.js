import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="navbar">
      <div className="nav-items">
        <h1>Math Magicians</h1>
        <ul className="list-items">
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
      </div>
      <Outlet />
    </nav>
  </>
);

export default Navbar;
