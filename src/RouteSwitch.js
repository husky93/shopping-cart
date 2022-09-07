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
    const isTooMuch = isAlreadyInCart
      ? isAlreadyInCart.count + count > 10
      : false;
    if (isAlreadyInCart && !isTooMuch) {
      isAlreadyInCart.count = isAlreadyInCart.count + count;
      setCartCount(cartCount + count);
    } else if (!isAlreadyInCart) {
      product.count = count;
      newCart = [...newCart, product];
      setCartCount(cartCount + count);
    }

    setCart(newCart);
  };

  const incrementItemCount = (event) => {
    const id = event.target.dataset.product;
    let newCart = cart.map((item) => {
      return { ...item };
    });
    const product = newCart.find((prod) => prod.id === id);
    if (product.count < 10) {
      product.count += 1;
      setCartCount(cartCount + 1);
    }
    setCart(newCart);
  };

  const decrementItemCount = (event) => {
    const id = event.target.dataset.product;
    let newCart = cart.map((item) => {
      return { ...item };
    });
    const product = newCart.find((prod) => prod.id === id);
    if (product.count > 1) {
      product.count -= 1;
      setCartCount(cartCount - 1);
    }
    setCart(newCart);
  };

  const deleteCartItem = (event) => {
    const id = event.target.dataset.product;
    let newCart = cart.filter((item) => item.id !== id);
    const cartItemCount = newCart.reduce(
      (prevValue, cartItem) => prevValue + cartItem.count,
      0
    );
    setCart(newCart);
    setCartCount(cartItemCount);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage cartCount={cartCount} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartCount={cartCount}
              cart={cart}
              decrementItemCount={decrementItemCount}
              incrementItemCount={incrementItemCount}
              deleteCartItem={deleteCartItem}
            />
          }
        />
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
