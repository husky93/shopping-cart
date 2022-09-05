import React from 'react';
import Link from './Link';
import '../assets/styles/components/NavLink.css';

const NavLink = ({ link, text, className }) => {
  const classes = className ? `nav__link ${className}` : 'nav__link';

  return (
    <li className="nav__item">
      <Link className={classes} link={link} text={text} />
    </li>
  );
};

export default NavLink;
