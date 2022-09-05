import React from 'react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import CartLink from './components/CartLink';
import '../../assets/styles/sections/Header.css';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <Logo text="Bonsai" />
      <Navbar />
      <CartLink cartCount={cartCount} link="/cart" />
    </header>
  );
};

export default Header;
