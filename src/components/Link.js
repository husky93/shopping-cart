import React from 'react';
import '../assets/styles/components/Link.css';

const Link = ({ text, link, className }) => {
  return (
    <a className={className} href={link}>
      {text}
    </a>
  );
};

export default Link;
