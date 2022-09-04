import Header from '../../sections/header/Header';
import Footer from '../../sections/footer/Footer';

const Cart = ({ cartCount }) => {
  return (
    <div className="cart">
      <Header cartCount={cartCount} />
      <Footer />
    </div>
  );
};

export default Cart;
