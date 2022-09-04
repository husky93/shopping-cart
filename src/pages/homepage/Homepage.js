import Footer from '../../sections/footer/Footer';
import Header from '../../sections/header/Header';
import Hero from './components/Hero';

const Homepage = ({ cartCount }) => {
  return (
    <main className="homepage">
      <Header cartCount={cartCount} />
      <Hero />
      <Footer />
    </main>
  );
};

export default Homepage;
