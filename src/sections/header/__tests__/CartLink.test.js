import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CartLink from '../components/CartLink';
import '@testing-library/jest-dom';

const cartLink = '/cart';
const cartCount = 3;

describe('NavLink', () => {
  it('renders a link', () => {
    render(
      <Router>
        <CartLink link={cartLink} />)
      </Router>
    );
    const link = screen.getByRole('link', { name: 'Cart' });
    const counter = screen.queryByRole('status', { name: 'Cart item counter' });
    expect(link).toBeInTheDocument();
    expect(counter).not.toBeInTheDocument();
  });

  it('renders a counter when cartCount prop specified', () => {
    render(
      <Router>
        <CartLink link={cartLink} cartCount={cartCount} />
      </Router>
    );
    const link = screen.getByRole('link', { name: 'Cart' });
    const counter = screen.getByRole('status', { name: 'Cart item counter' });
    expect(link).toBeInTheDocument();
    expect(counter).toBeInTheDocument();
    expect(counter.textContent).toBe('3');
  });

  it('has a correct href argument', () => {
    render(
      <Router>
        <CartLink link={cartLink} />
      </Router>
    );
    const link = screen.getByRole('link', { name: 'Cart' });
    expect(link).toHaveAttribute('href', '/cart');
  });
});
