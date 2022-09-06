import React from 'react';
import Button from './Button';
import Text from './Text';

const Counter = ({ handleIncrement, handleDecrement, count }) => {
  return (
    <div className="counter">
      <Button
        text="-"
        handleClick={handleDecrement}
        className="btn btn--count"
      />
      <Text tag="span" className="counter__count" text={count} />
      <Button
        text="+"
        handleClick={handleIncrement}
        className="btn btn--count"
      />
    </div>
  );
};

export default Counter;
