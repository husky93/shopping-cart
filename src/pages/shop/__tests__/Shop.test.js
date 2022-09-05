import { render, screen } from '@testing-library/react';
import Shop from '../Shop';
import '@testing-library/jest-dom';

jest.mock('../../../sections/header/Header', () => () => (
  <header data-testid="header"></header>
));

jest.mock('../../../sections/footer/Footer', () => () => (
  <footer data-testid="footer"></footer>
));

jest.mock('../components/Products', () => () => (
  <section data-testid="products"></section>
));

const products = [
  {
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
    id: '0',
    img: 'product-6.jpg',
    price: '1250$',
    text: 'Legendary Bonsai Tree',
  },
];

describe('Shop', () => {
  it('renders shop component', () => {
    render(<Shop products={products} />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
  it('renders header component inside', () => {
    render(<Shop products={products} />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
  it('renders footer component inside', () => {
    render(<Shop products={products} />);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
});
