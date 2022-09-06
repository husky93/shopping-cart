import React from 'react';
import { ReactComponent as CartIcon } from '../../../assets/icons/shopping-cart.svg';
import { Link } from 'react-router-dom';
import '../../../assets/styles/sections/CartLink.css';

const CartLink = ({ link, cartCount }) => {
  const classes = cartCount ? 'cart-link active' : 'cart-link';
  return (
    <div className="cart-link__wrapper">
      <div className="cart-link__content">
        {cartCount ? (
          <span
            className="cart-link__counter"
            role="status"
            aria-label="Cart item counter"
          >
            {cartCount}
          </span>
        ) : (
          ''
        )}
        <Link className={classes} to={link} aria-label="Cart">
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};

export default CartLink;
