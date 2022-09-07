import React, { useState, useEffect } from 'react';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import '../../../assets/styles/cart/Summary.css';

const Summary = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const sum = cart.reduce((previousValue, cartItem) => {
      return previousValue + parseInt(cartItem.price, 10) * cartItem.count;
    }, 0);
    setTotalPrice(sum);
  }, [cart]);

  return (
    <section aria-label="Cart summary" className="summary">
      <Text tag="h2" text="Payment" className="summary__heading" />
      <div className="summary__group">
        <Text tag="span" text="Products Value:" className="summary__text" />
        <Text tag="span" text={totalPrice + '$'} className="summary__text" />
      </div>
      <div className="summary__group">
        <Text tag="span" text="Delivery:" className="summary__text" />
        <Text tag="span" text="free" className="summary__text" />
      </div>
      <div className="summary__group summary__total">
        <Text tag="span" text="Total" className="summary__text" />
        <Text tag="span" text={totalPrice + '$'} className="summary__text" />
      </div>
      <Button
        text={<span key="checkout-btn">Checkout</span>}
        className="btn btn--primary"
        handleClick={() => alert('Thanks for checking out my project! 😁')}
      />
    </section>
  );
};

export default Summary;
