import React from 'react';
import { useObserver } from '../../../app/hooks';
import '../../../assets/styles/shop/Products.css';

const Card = React.lazy(() => import('./Card'));

const Products = ({ products }) => {
  const { containerRef, isVisible } = useObserver();
  return (
    <section
      aria-label="Products"
      className={`products enter-transition ${isVisible ? 'in-viewport' : ''}`}
      ref={containerRef}
    >
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
