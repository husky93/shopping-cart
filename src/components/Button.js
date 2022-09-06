import React from 'react';
import '../assets/styles/components/Button.css';

const Button = ({ handleClick, text, className, productId, count }) => {
  return (
    <button
      onClick={handleClick}
      className={className}
      data-product={productId}
      data-count={productId}
    >
      {text}
    </button>
  );
};

export default Button;
