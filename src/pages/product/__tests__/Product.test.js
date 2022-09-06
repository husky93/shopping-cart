import { render, screen } from '@testing-library/react';
import Product from '../Product';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';

const products = [
  {
    id: '0',
    text: 'Red Bonsai Tree',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    price: '235$',
    img: 'product-1.jpg',
  },
];

describe('Product', () => {
  it('renders product section', () => {
    render(
      <Router>
        <Product products={products} />
      </Router>
    );
    const section = screen.getByRole('main');
    expect(section).toBeInTheDocument();
  });
  it('renders error when wrong product route specified', () => {
    const history = createMemoryHistory();
    history.push('/product/5');
    render(
      <Router history={history}>
        <Product products={products} />
      </Router>
    );
    const heading = screen.getByText('ERROR 404 PRODUCT NOT FOUND');
    expect(heading).toBeInTheDocument();
  });
});
