import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('renders a navbar', () => {
    render(<Navbar />);
    const nav = screen.getByRole('navigation');
    const list = screen.getByRole('list');

    expect(nav).toBeInTheDocument();
    expect(list).toBeInTheDocument();
  });
});
