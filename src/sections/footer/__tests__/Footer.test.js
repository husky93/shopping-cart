import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import '@testing-library/jest-dom';

describe('Footer', () => {
  it('renders a footer element', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
  it('has a creator contribution', () => {
    render(<Footer />);
    const text = screen.getByText(/©/i);
    expect(text).toBeInTheDocument();
  });
});
