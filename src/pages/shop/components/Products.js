import React from 'react';
import { useObserver } from '../../../app/hooks';
import '../../../assets/styles/shop/Products.css';

const Card = React.lazy(() => import('./Card'));

const Products = ({ products }) => {
  const { containerRef, isVisible } = useObserver(0.1);
  return (
    <div>
      <section
        aria-label="Products"
        className={`products enter-transition ${
          isVisible ? 'in-viewport' : ''
        }`}
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
    </div>
  );
};

export default Products;
