import React from 'react';
import '../assets/styles/components/Button.css';

const Button = ({ handleClick, text, className }) => {
  return (
    <button onClick={handleClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
