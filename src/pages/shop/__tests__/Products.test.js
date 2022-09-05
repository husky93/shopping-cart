import { render, screen } from '@testing-library/react';
import Products from '../components/Products';

describe('Products', () => {
  it('renders products section', () => {
    render(<Products />);
    const section = screen.getByRole('region', { name: 'Products' });
    expect(section).toBeInTheDocument();
  });
  it('has 6 card elements', () => {
    render(<Products />);
    const cards = screen.queryAllByRole('figure');
    expect(cards.length).toBe(6);
  });
});
