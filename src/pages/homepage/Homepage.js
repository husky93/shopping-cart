import Header from '../../sections/header/Header';
import Hero from './components/Hero';

const Homepage = ({ cartCount }) => {
  return (
    <main className="homepage">
      <Header cartCount={cartCount} />
      <Hero />
    </main>
  );
};

export default Homepage;
