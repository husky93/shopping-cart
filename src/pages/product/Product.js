import React, { useState, useEffect } from 'react';
import Header from '../../sections/header/Header';
import Footer from '../../sections/footer/Footer';
import { useParams } from 'react-router-dom';

const Product = ({ products, cartCount }) => {
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    const currentProduct = products.find((prod) => prod.id === params.id);
    setProduct(currentProduct);
  }, [params.id, products]);

  if (!product) {
    return (
      <main className="product">
        <Header cartCount={cartCount} />
        <h2 className="error__heading">ERROR 404 PRODUCT NOT FOUND</h2>
        <Footer />
      </main>
    );
  } else {
    return (
      <main className="product">
        <Header cartCount={cartCount} />
        <Footer />
      </main>
    );
  }
};

export default Product;
