import { render, screen } from '@testing-library/react';
import Product from '../Product';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { Route, MemoryRouter, Routes } from 'react-router-dom';

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
      <MemoryRouter initialEntries={['/product/0']}>
        <Routes>
          <Route
            path="/product/:id"
            element={<Product products={products} />}
          />
        </Routes>
      </MemoryRouter>
    );
    const section = screen.getByRole('main');
    expect(section).toBeInTheDocument();
  });
  it('renders error when wrong product route specified', () => {
    render(
      <MemoryRouter initialEntries={['/product/5']}>
        <Routes>
          <Route
            path="/product/:id"
            element={<Product products={products} />}
          />
        </Routes>
      </MemoryRouter>
    );
    const heading = screen.getByText('ERROR 404 PRODUCT NOT FOUND');
    expect(heading).toBeInTheDocument();
  });
  it('renders product page when correct product path', () => {
    render(
      <MemoryRouter initialEntries={['/product/0']}>
        <Routes>
          <Route
            path="/product/:id"
            element={<Product products={products} />}
          />
        </Routes>
      </MemoryRouter>
    );
    const heading = screen.getByRole('heading', { name: 'Red Bonsai Tree' });
    expect(heading).toBeInTheDocument();
  });
});
