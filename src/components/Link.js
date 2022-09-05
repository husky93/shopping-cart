import React from 'react';
import '../assets/styles/components/Link.css';

const Link = ({ text, link, className, handleClick }) => {
  return (
    <a className={className} href={link} onClick={handleClick}>
      {text}
    </a>
  );
};

export default Link;
