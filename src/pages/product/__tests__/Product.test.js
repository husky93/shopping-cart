import { render, screen, act } from '@testing-library/react';
import Product from '../Product';
import '@testing-library/jest-dom';
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
  it('renders product section', async () => {
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
    await act(async () => {
      const section = await screen.findByRole('main');
      expect(section).toBeInTheDocument();
    });
  });
  it('renders error when wrong product route specified', async () => {
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

    await act(async () => {
      const heading = await screen.findByText('ERROR 404 PRODUCT NOT FOUND');
      expect(heading).toBeInTheDocument();
    });
  });
  it('renders product page when correct product path', async () => {
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
    await act(async () => {
      const heading = await screen.findByRole('heading', {
        name: 'Red Bonsai Tree',
      });
      expect(heading).toBeInTheDocument();
    });
  });
});
