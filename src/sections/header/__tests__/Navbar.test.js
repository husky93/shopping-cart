import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom';

describe('Navbar', () => {
  it('renders a navbar', () => {
    render(<Navbar />);
    const nav = screen.getByRole('navigation');
    const list = screen.getByRole('list');

    expect(nav).toBeInTheDocument();
    expect(list).toBeInTheDocument();
  });

  it('has two links', () => {
    render(<Navbar />);
    const links = screen.queryAllByRole('link');

    expect(links.length).toBe(2);
    expect(links[0].textContent).toBe('Home');
    expect(links[1].textContent).toBe('Shop');
  });
});
