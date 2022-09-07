import Header from '../../sections/header/Header';
import Footer from '../../sections/footer/Footer';
import CartItem from './components/CartItem';
import Summary from './components/Summary';
import Text from '../../components/Text';
import '../../assets/styles/cart/Cart.css';

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
