import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSVG } from '../../../assets/images/logo.svg';
import '../../../assets/styles/sections/Logo.css';

const Logo = () => {
  return (
    <div>
      <Link to="/" className="logo__link">
        <LogoSVG />
      </Link>
    </div>
  );
};

export default Logo;
