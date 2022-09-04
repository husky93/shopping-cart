import { render, screen } from '@testing-library/react';
import CartLink from '../components/CartLink';
import '@testing-library/jest-dom';

const cartLink = '/cart';
const cartCount = 3;

describe('NavLink', () => {
  it('renders a link', () => {
    render(<CartLink link={cartLink} />);
    const link = screen.getByRole('link', { name: 'Cart' });
    const counter = screen.queryByRole('status', { name: 'Cart item counter' });
    expect(link).toBeInTheDocument();
    expect(counter).not.toBeInTheDocument();
  });

  it('renders a counter when cartCount prop specified', () => {
    render(<CartLink link={cartLink} cartCount={cartCount} />);
    const link = screen.getByRole('link', { name: 'Cart' });
    const counter = screen.getByRole('status', { name: 'Cart item counter' });
    expect(link).toBeInTheDocument();
    expect(counter).toBeInTheDocument();
    expect(counter.textContent).toBe('3');
  });

  it('has a correct href argument', () => {
    render(<CartLink link={cartLink} />);
    const link = screen.getByRole('link', { name: 'Cart' });
    expect(link).toHaveAttribute('href', '/cart');
  });
});
