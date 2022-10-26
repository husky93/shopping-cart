import React from 'react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import CartLink from './components/CartLink';
import '../../assets/styles/sections/Header.css';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="content header__content">
        <Logo />
        <Navbar />
        <CartLink cartCount={cartCount} link="/cart" />
      </div>
    </header>
  );
};

export default Header;
