import Footer from '../../sections/footer/Footer';
import Header from '../../sections/header/Header';
import '../../assets/styles/loading/Loading.css';

const Loading = ({ cartCount }) => {
  return (
    <main className="loading">
      <Header cartCount={cartCount} />
      <div className="loading-content">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Loading;
