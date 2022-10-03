import { render, screen } from '@testing-library/react';
import Logo from '../components/Logo';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  Link: ({ children }) => <a href="/">{children}</a>,
}));

describe('Logo', () => {
  it('renders a logo heading with correct text', () => {
    render(<Logo text="Bonsai" />);
    const logo = screen.getByRole('heading', 'Bonsai');
    expect(logo).toBeInTheDocument();
  });
});
