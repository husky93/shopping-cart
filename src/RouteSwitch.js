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
    const product = { ...products.find((prod) => prod.id === id) };
    let newCart = cart.map((item) => {
      return { ...item };
    });

    console.log(product);
    console.log(newCart);
    const isAlreadyInCart = newCart.find((item) => item.id === id);
    if (isAlreadyInCart) {
      isAlreadyInCart.count = isAlreadyInCart.count + 1;
    } else {
      product.count = 1;
      newCart = [...newCart, product];
    }
    setCart(newCart);
    setCartCount(cartCount + 1);
    console.log(cart, cartCount);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop products={products} />} />
        <Route
          path="/product/:id"
          element={<Product products={products} addToCart={addToCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
