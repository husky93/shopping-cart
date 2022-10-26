import React, { useEffect } from 'react';
import '../../assets/styles/homepage/Homepage.css';

const Header = React.lazy(() => import('../../sections/header/Header'));
const Footer = React.lazy(() => import('../../sections/footer/Footer'));
const Hero = React.lazy(() => import('./components/Hero'));
const Info = React.lazy(() => import('./components/Info'));
const About = React.lazy(() => import('./components/About'));

const Homepage = ({ cartCount }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="homepage">
      <Header cartCount={cartCount} />
      <Hero />
      <About />
      <Info />
      <Footer />
    </main>
  );
};

export default Homepage;
