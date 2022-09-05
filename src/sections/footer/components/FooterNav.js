import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../assets/styles/sections/FooterNav.css';

const Navbar = () => {
  return (
    <ul className="footer-nav">
      <li className="nav__item">
        <NavLink to="/" className="nav__link--footer">
          Terms of Service
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/" className="nav__link--footer">
          Privacy Policy
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/" className="nav__link--footer">
          Shipping Policy
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/" className="nav__link--footer">
          Our Warranty
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/" className="nav__link--footer">
          Refund Policy
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
