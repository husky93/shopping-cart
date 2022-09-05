import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../assets/styles/sections/Navbar.css';

const Navbar = () => {
  const [links, setLinks] = useState([
    { text: 'Home', href: '/', className: 'nav__link nav__link--header' },
    {
      text: 'Shop',
      href: '/shop',
      className: 'nav__link nav__link--header',
    },
  ]);

  return (
    <nav className="nav">
      <ul className="nav__list">
        {links.map((link, index) => (
          <li className="nav__item" key={`nav-item-${index}`}>
            <NavLink
              to={link.href}
              className={link.className}
              key={`nav-link-${index}`}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
