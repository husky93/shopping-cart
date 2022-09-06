import React, { useState, useEffect } from 'react';
import Header from '../../sections/header/Header';
import Footer from '../../sections/footer/Footer';
import Text from '../../components/Text';
import Button from '../../components/Button';
import Counter from '../../components/Counter';
import { useParams } from 'react-router-dom';
import '../../assets/styles/product/Product.css';

const Product = ({ products, addToCart, cartCount }) => {
  const [product, setProduct] = useState(null);
  const [imgSrc, setImgSrc] = useState('');
  const [count, setCount] = useState(1);
  const params = useParams();

  useEffect(() => {
    const importImage = async () => {
      const image = await import(`../../assets/images/${product.img}`).then(
        (module) => module.default
      );
      setImgSrc(image);
    };
    const currentProduct = products.find((prod) => prod.id === params.id);
    setProduct(currentProduct);
    if (product) {
      importImage();
    }
  }, [params.id, products, product]);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  if (!product) {
    return (
      <main className="product">
        <Header cartCount={cartCount} />
        <Text
          className="error__heading"
          tag="h2"
          text="ERROR 404 PRODUCT NOT FOUND"
        />
        <Footer />
      </main>
    );
  } else {
    return (
      <main className="product">
        <Header cartCount={cartCount} />
        <div className="content product__content">
          <div className="product__container product__gallery">
            <img src={imgSrc} alt={product.text} className="product__img" />
          </div>
          <div className="product__container product__info">
            <Text
              className="product__heading text--highlighted"
              tag="h2"
              text={product.text}
            />
            <Text
              className="product__description"
              tag="p"
              text={product.description}
            />
            <Text
              className="product__price"
              tag="span"
              text={[
                'Price: ',
                <span key="product-price">{product.price}</span>,
              ]}
            />
            <div className="counter__container">
              <Text className="product__price" tag="p" text={['Quantity: ']} />
              <Counter
                count={count}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            </div>

            <Button
              className="btn btn--primary"
              handleClick={addToCart}
              productId={params.id}
              count={count}
              text={
                <span
                  key="add-to-cart"
                  data-product={params.id}
                  data-count={count}
                >
                  Add to cart
                </span>
              }
            />
          </div>
        </div>
        <Footer />
      </main>
    );
  }
};

export default Product;
