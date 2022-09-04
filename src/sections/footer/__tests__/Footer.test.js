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
    const text = screen.getByText(/created by/i);
    expect(text).toBeInTheDocument();
  });
  it('has 6 links', () => {
    render(<Footer />);
    const links = screen.queryAllByRole('link');
    expect(links.length).toBe(5);
  });
});
