import Header from '../../sections/header/Header';
import Footer from '../../sections/footer/Footer';
import CartItem from './components/CartItem';
import Summary from './components/Summary';

const Cart = ({ cart, cartCount, decrementItemCount, incrementItemCount }) => {
  return (
    <main className="cart">
      <Header cartCount={cartCount} />
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
            key={`cart-item-${index}`}
          />
        ))}
      </div>
      <Summary cart={cart} />
      <Footer />
    </main>
  );
};

export default Cart;
