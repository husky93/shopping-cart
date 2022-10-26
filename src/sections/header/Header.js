import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import CartLink from './components/CartLink';
import '../../assets/styles/sections/Header.css';

const Header = ({ cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsScrolled(false);
        return;
      }
      if (!isScrolled && window.scrollY > 0) {
        setIsScrolled(true);
        return;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="content header__content">
        <Logo />
        <Navbar />
        <CartLink cartCount={cartCount} link="/cart" />
      </div>
    </header>
  );
};

export default Header;
