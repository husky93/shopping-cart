import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';
import Product from './pages/product/Product';
import React, { useState, useEffect } from 'react';

const RouteSwitch = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let data;
    await import('./assets/products.json').then((productsData) => {
      data = productsData.default;
    });
    setProducts(data);
  };

  const addToCart = (event) => {
    const id = event.target.dataset.product;
    let count = event.target.dataset.count
      ? parseInt(event.target.dataset.count, 10)
      : 1;
    const product = { ...products.find((prod) => prod.id === id) };
    let newCart = cart.map((item) => {
      return { ...item };
    });

    const isAlreadyInCart = newCart.find((item) => item.id === id);
    if (isAlreadyInCart) {
      isAlreadyInCart.count = isAlreadyInCart.count + count;
    } else {
      product.count = count;
      newCart = [...newCart, product];
    }
    console.log(count);
    setCart(newCart);
    setCartCount(cartCount + count);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage cartCount={cartCount} />} />
        <Route path="/cart" element={<Cart cartCount={cartCount} />} />
        <Route
          path="/shop"
          element={<Shop cartCount={cartCount} products={products} />}
        />
        <Route
          path="/product/:id"
          element={
            <Product
              cartCount={cartCount}
              addToCart={addToCart}
              products={products}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
