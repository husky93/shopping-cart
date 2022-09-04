import Header from '../../sections/header/Header';

const Product = ({ cartCount }) => {
  return (
    <div className="product">
      <Header cartCount={cartCount} />
    </div>
  );
};

export default Product;
