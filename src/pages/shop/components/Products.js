import React from 'react';
import Card from './Card';
import '../../../assets/styles/shop/Products.css';

const Products = ({ products }) => {
  return (
    <section aria-label="Products" className="products">
      {products.map((prod) => (
        <Card
          id={prod.id}
          key={'product-card-' + prod.id}
          text={prod.text}
          description={prod.description}
          price={prod.price}
          img={prod.img}
        />
      ))}
    </section>
  );
};

export default Products;
