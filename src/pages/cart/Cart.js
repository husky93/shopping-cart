import Header from '../../sections/header/Header';

const Cart = ({ cartCount }) => {
  return (
    <div className="cart">
      <Header cartCount={cartCount} />
    </div>
  );
};

export default Cart;
