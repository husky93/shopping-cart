import React from 'react';
import '../../assets/styles/cart/Cart.css';

const Header = React.lazy(() => import('../../sections/header/Header'));
const Footer = React.lazy(() => import('../../sections/footer/Footer'));
const CartItem = React.lazy(() => import('./components/CartItem'));
const Summary = React.lazy(() => import('./components/Summary'));
const Text = React.lazy(() => import('../../components/Text'));

const Cart = ({
  cart,
  cartCount,
  decrementItemCount,
  incrementItemCount,
  deleteCartItem,
}) => {
  return (
    <main className="cart">
      <Header cartCount={cartCount} />
      <div className="content cart__content">
        {cart.length > 0 ? (
          <div role="list" className="cart__list">
            {cart.map((item, index) => (
              <CartItem
                img={item.img}
                count={item.count}
                text={item.text}
                price={item.price}
                description={item.shortdesc}
                id={item.id}
                handleItemIncrement={incrementItemCount}
                handleItemDecrement={decrementItemCount}
                handleCartItemDelete={deleteCartItem}
                key={`cart-item-${index}`}
              />
            ))}
          </div>
        ) : (
          <div role="list" className="cart__list">
            <Text className="cart__error" tag="h2" text="Your cart is empty!" />
          </div>
        )}

        <Summary cart={cart} />
      </div>
      <Footer />
    </main>
  );
};

export default Cart;
