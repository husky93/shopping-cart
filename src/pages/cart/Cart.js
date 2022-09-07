import Header from '../../sections/header/Header';
import Footer from '../../sections/footer/Footer';
import CartItem from './components/CartItem';

const Cart = ({ cart, cartCount }) => {
  console.log(cart);
  return (
    <main className="cart">
      <Header cartCount={cartCount} />
      <div role="list" className="cart__list">
        {cart.map((item) => (
          <CartItem
            img={item.img}
            count={item.count}
            text={item.text}
            price={item.price}
            description={item.shortdesc}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default Cart;
