import React from 'react';
import '../../../assets/styles/shop/Products.css';

const Card = React.lazy(() => import('./Card'));

const Products = ({ products }) => {
  return (
    <section aria-label="Products" className="products">
      <div className="content products__content">
        <h2 className="products__heading">Products</h2>
        <div className="products__wrapper">
          {products.map((prod) => (
            <Card
              id={prod.id}
              key={'prod-card' + prod.img}
              text={prod.text}
              description={prod.description}
              price={prod.price}
              img={prod.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
