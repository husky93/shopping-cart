import React, { useState, useEffect } from 'react';
import Header from '../../sections/header/Header';
import Footer from '../../sections/footer/Footer';
import Text from '../../components/Text';
import { useParams } from 'react-router-dom';

const Product = ({ products, cartCount }) => {
  const [product, setProduct] = useState(null);
  const [imgSrc, setImgSrc] = useState('');
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
          <Text className="product__heading" tag="h2" text={product.text} />
          <img src={imgSrc} />
        </div>
        <Footer />
      </main>
    );
  }
};

export default Product;
