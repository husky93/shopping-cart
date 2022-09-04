import Header from '../../sections/header/Header';

const Homepage = ({ cartCount }) => {
  return (
    <div className="homepage">
      <Header cartCount={cartCount} />
    </div>
  );
};

export default Homepage;
