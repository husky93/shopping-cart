import Header from '../../sections/header/Header';
import Footer from '../../sections/footer/Footer';

const Shop = ({ cartCount }) => {
  return (
    <div className="homepage">
      <Header cartCount={cartCount} />
      <Footer />
    </div>
  );
};

export default Shop;
