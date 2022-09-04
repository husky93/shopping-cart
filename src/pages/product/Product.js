import Header from '../../sections/header/Header';
import Footer from '../../sections/footer/Footer';

const Product = ({ cartCount }) => {
  return (
    <div className="product">
      <Header cartCount={cartCount} />
      <Footer />
    </div>
  );
};

export default Product;
