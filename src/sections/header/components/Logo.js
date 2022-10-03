import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/styles/sections/Logo.css';

const Logo = ({ text }) => {
  return (
    <Link to="/" className="logo__link">
      <h1 className="logo">{text}</h1>
    </Link>
  );
};

export default Logo;
