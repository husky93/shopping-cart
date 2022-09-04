import React from 'react';

const Link = ({ text, link, className }) => {
  return (
    <a className={className} href={link}>
      {text}
    </a>
  );
};

export default Link;
