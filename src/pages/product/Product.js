import Header from '../../sections/header/Header';
import Footer from '../../sections/footer/Footer';
import { useParams } from 'react-router-dom';

const Product = ({ product, cartCount }) => {
  const params = useParams();
  const id = params.id;
  return (
    <div className="product">
      <div></div>
      <Header cartCount={cartCount} />
      <Footer />
    </div>
  );
};

export default Product;
