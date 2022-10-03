import React from 'react';
import '../../assets/styles/homepage/Homepage.css';

const Header = React.lazy(() => import('../../sections/header/Header'));
const Footer = React.lazy(() => import('../../sections/footer/Footer'));
const Hero = React.lazy(() => import('./components/Hero'));
const Info = React.lazy(() => import('./components/Info'));

const Homepage = ({ cartCount }) => {
  return (
    <main className="homepage">
      <Header cartCount={cartCount} />
      <Hero />
      <Info />
      <Footer />
    </main>
  );
};

export default Homepage;
