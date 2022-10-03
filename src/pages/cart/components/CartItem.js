import React from 'react';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import Counter from '../../../components/Counter';
import '../../../assets/styles/cart/CartItem.css';

const CartItem = ({
  count,
  text,
  img,
  price,
  id,
  description,
  handleItemIncrement,
  handleItemDecrement,
  handleCartItemDelete,
}) => {
  const totalPrice = parseInt(price, 10) * count;

  return (
    <div role="listitem" className="cart-item">
      <div className="cart-item__container cart-item--left">
        <img src={img} alt={text} className="cart-item__img"></img>
        <div className="cart-item__info">
          <Text tag="h4" text={text} className="cart-item__title" />
          <Text tag="p" text={description} className="cart-item__desc" />
        </div>
      </div>
      <div className="cart-item__container cart-item__ui cart-item--right">
        <div className="cart-ui__container">
          <Counter
            handleIncrement={handleItemIncrement}
            handleDecrement={handleItemDecrement}
            count={count}
            productId={id}
          />
          <Button
            handleClick={handleCartItemDelete}
            text="Delete"
            className="btn btn--delete"
            productId={id}
          />
        </div>

        <Text tag="span" text={totalPrice + '$'} className="cart-item__price" />
      </div>
    </div>
  );
};

export default CartItem;
