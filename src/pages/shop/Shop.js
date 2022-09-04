import Header from '../../sections/header/Header';

const Shop = ({ cartCount }) => {
  return (
    <div className="homepage">
      <Header cartCount={cartCount} />
    </div>
  );
};

export default Shop;
