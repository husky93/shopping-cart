import React, { useState, useEffect } from 'react';
import Text from '../../../components/Text';
import Button from '../../../components/Button';

const Summary = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const sum = cart.reduce(
      (previousValue, cartItem) =>
        previousValue + parseInt(cartItem.price, 10) * cartItem.count,
      0
    );
    setTotalPrice(sum);
  }, [cart]);

  return <section aria-label="Cart summary"></section>;
};

export default Summary;
