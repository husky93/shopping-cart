import React from 'react';
import Text from '../../components/Text';
import FooterNav from './components/FooterNav';
import '../../assets/styles/sections/Footer.css';

const Footer = () => {
  const githubLink = (
    <a href="https://github.com/husky93" className="author" key="author">
      husky93
    </a>
  );
  return (
    <footer className="footer">
      <div className="content footer__content">
        <Text text={['Forged by ', githubLink, ' 2022']} tag="span" />
        <FooterNav />
      </div>
    </footer>
  );
};

export default Footer;
