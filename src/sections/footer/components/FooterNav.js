import React from 'react';
import NavLink from '../../../components/NavLink';

const Navbar = () => {
  return (
    <ul className="footer-nav">
      <NavLink text="Terms of Service" link="#" />
      <NavLink text="Privacy Policy" link="#" />
      <NavLink text="Shipping Policy" link="#" />
      <NavLink text="Our Warranty" link="#" />
      <NavLink text="Refund Policy" link="#" />
    </ul>
  );
};

export default Navbar;
