import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavLink text="Home" link="/" />
        <NavLink text="Shop" link="/shop" />
      </ul>
    </nav>
  );
};

export default Navbar;
