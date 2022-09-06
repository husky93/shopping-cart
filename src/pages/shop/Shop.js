import Header from '../../sections/header/Header';
import Footer from '../../sections/footer/Footer';
import Products from './components/Products';
import '../../assets/styles/shop/Shop.css';

const Shop = ({ products, cartCount }) => {
  return (
    <main className="shop">
      <Header cartCount={cartCount} />
      <Products products={products} />
      <Footer />
    </main>
  );
};

export default Shop;
