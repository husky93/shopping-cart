import Header from '../../sections/header/Header';

const Homepage = ({ cartCount }) => {
  return (
    <main className="homepage">
      <Header cartCount={cartCount} />
    </main>
  );
};

export default Homepage;
