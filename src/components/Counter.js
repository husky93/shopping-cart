import React from 'react';
import Button from './Button';
import Text from './Text';
import '../assets/styles/components/Counter.css';

const Counter = ({ handleIncrement, handleDecrement, count, productId }) => {
  return (
    <div className="counter">
      <Button
        text="-"
        handleClick={handleDecrement}
        className="btn btn--count"
        productId={productId}
      />
      <Text tag="span" className="counter__count" text={count} />
      <Button
        text="+"
        handleClick={handleIncrement}
        className="btn btn--count"
        productId={productId}
      />
    </div>
  );
};

export default Counter;
