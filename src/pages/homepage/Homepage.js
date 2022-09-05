import Footer from '../../sections/footer/Footer';
import Header from '../../sections/header/Header';
import Hero from './components/Hero';
import Info from './components/Info';

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
