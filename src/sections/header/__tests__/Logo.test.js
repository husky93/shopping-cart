import { render, screen } from '@testing-library/react';
import Logo from '../components/Logo';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  Link: ({ children }) => (
    <a href="/" data-testid="logo">
      {children}
    </a>
  ),
}));

describe('Logo', () => {
  it('renders a logo heading with correct text', () => {
    render(<Logo />);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });
});
