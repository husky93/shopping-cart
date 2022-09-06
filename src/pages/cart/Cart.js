import Header from '../../sections/header/Header';
import Footer from '../../sections/footer/Footer';

const Cart = ({ cartCount }) => {
  return (
    <main className="cart">
      <Header cartCount={cartCount} />
      <Footer />
    </main>
  );
};

export default Cart;
