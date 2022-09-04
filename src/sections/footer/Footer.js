import React from 'react';
import Text from '../../components/Text';
import Link from '../../components/Link';
import FooterNav from './components/FooterNav';

const Footer = () => {
  const githubLink = (
    <Link
      link="https://github.com/husky93"
      className="author"
      text="husky93"
      key="author"
    />
  );
  return (
    <footer className="footer">
      <Text text={['© ', githubLink, ' 2022']} tag="span" />
      <FooterNav />
    </footer>
  );
};

export default Footer;
