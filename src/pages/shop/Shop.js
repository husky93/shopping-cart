import React from 'react';
import '../../assets/styles/shop/Shop.css';

const Header = React.lazy(() => import('../../sections/header/Header'));
const Footer = React.lazy(() => import('../../sections/footer/Footer'));
const Products = React.lazy(() => import('./components/Products'));

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
