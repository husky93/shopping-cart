import React, { useState, useEffect } from 'react';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import Counter from '../../../components/Counter';

const CartItem = ({
  count,
  text,
  img,
  price,
  description,
  handleCartIncrement,
  handleCartDecrement,
  handleCartItemDelete,
}) => {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const importImage = async () => {
      const image = await import(`../../../assets/images/${img}`).then(
        (module) => module.default
      );
      setImgSrc(image);
    };
    importImage();
  }, []);

  return (
    <div role="listitem" className="cart-item">
      <div className="cart-item__container cart-item--left">
        <img src={imgSrc} alt={text}></img>
        <div className="cart-item__info">
          <Text tag="h4" text={text} className="cart-item__title" />
          <Text tag="p" text={description} className="cart-item__desc" />
          <Button
            handleClick={handleCartItemDelete}
            text="Delete"
            className="btn btn--delete"
          />
        </div>
      </div>
      <div className="cart-item__container cart-item--right">
        <Counter
          handleIncrement={handleCartIncrement}
          handleDecrement={handleCartDecrement}
          count={count}
        />
        <Text tag="span" text={price} className="cart-item__price" />
      </div>
    </div>
  );
};

export default CartItem;
