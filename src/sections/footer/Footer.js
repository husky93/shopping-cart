import React from 'react';
import Text from '../../components/Text';
import { Link } from 'react-router-dom';
import FooterNav from './components/FooterNav';
import '../../assets/styles/sections/Footer.css';

const Footer = () => {
  const githubLink = (
    <Link to="https://github.com/husky93" className="author" key="author">
      husky93
    </Link>
  );
  return (
    <footer className="footer">
      <div className="content footer__content">
        <Text text={['© ', githubLink, ' 2022']} tag="span" />
        <FooterNav />
      </div>
    </footer>
  );
};

export default Footer;
