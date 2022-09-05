import { render, screen } from '@testing-library/react';
import Products from '../components/Products';
import '@testing-library/jest-dom';

jest.mock('../components/Card', () => () => (
  <figure data-testid="card"></figure>
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

describe('Products', () => {
  it('renders products section', () => {
    render(<Products products={products} />);
    const section = screen.getByRole('region', { name: 'Products' });
    expect(section).toBeInTheDocument();
  });
  it('renders products.length elements', () => {
    render(<Products products={products} />);
    const cards = screen.queryAllByRole('figure');
    expect(cards.length).toBe(1);
  });
});
