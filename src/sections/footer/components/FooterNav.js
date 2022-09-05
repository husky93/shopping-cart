import React from 'react';
import NavLink from '../../../components/NavLink';
import '../../../assets/styles/sections/FooterNav.css';

const Navbar = () => {
  return (
    <ul className="footer-nav">
      <NavLink text="Terms of Service" link="#" className="footer__link" />
      <NavLink text="Privacy Policy" link="#" className="footer__link" />
      <NavLink text="Shipping Policy" link="#" className="footer__link" />
      <NavLink text="Our Warranty" link="#" className="footer__link" />
      <NavLink text="Refund Policy" link="#" className="footer__link" />
    </ul>
  );
};

export default Navbar;
