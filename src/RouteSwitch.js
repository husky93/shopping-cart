import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';
import Product from './pages/product/Product';
import React, { useState, useEffect } from 'react';

const RouteSwitch = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop products={products} />} />
        <Route path="/product/:id" element={<Product products={products} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
