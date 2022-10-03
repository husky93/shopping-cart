import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './pages/loading/Loading';
import React, { useState, useEffect, useRef, Suspense } from 'react';

const Homepage = React.lazy(() => import('./pages/homepage/Homepage'));
const Cart = React.lazy(() => import('./pages/cart/Cart'));
const Shop = React.lazy(() => import('./pages/shop/Shop'));
const Product = React.lazy(() => import('./pages/product/Product'));

const RouteSwitch = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const isImagesFetched = useRef(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0 && !isImagesFetched.current) {
      const newProducts = [];
      const productsLength = products.length;
      products.forEach(async (product, index) => {
        const image = await import(`./assets/images/${product.img}`).then(
          (module) => module.default
        );
        const img = (new Image().src = image);
        const newProd = { ...product, img };
        newProducts.push(newProd);
        if (index === productsLength - 1) {
          setProducts(newProducts);
          isImagesFetched.current = true;
        }
      });
    }
    console.log(products);
  }, [products]);

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
    <Router>
      <Suspense fallback={<Loading cartCount={cartCount} />}>
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
      </Suspense>
    </Router>
  );
};

export default RouteSwitch;
