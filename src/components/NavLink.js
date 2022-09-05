import React from 'react';
import Link from './Link';
import '../assets/styles/components/NavLink.css';

const NavLink = ({ link, text }) => {
  return (
    <li className="nav__item">
      <Link className="nav__link" link={link} text={text} />
    </li>
  );
};

export default NavLink;
