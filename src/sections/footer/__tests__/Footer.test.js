import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../Footer';
import '@testing-library/jest-dom';

describe('Footer', () => {
  it('renders a footer element', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
  it('has a creator contribution', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    const text = screen.getByText(/©/i);
    expect(text).toBeInTheDocument();
  });
});
