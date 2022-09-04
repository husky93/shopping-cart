import { render, screen } from '@testing-library/react';
import Logo from '../components/Logo';
import '@testing-library/jest-dom';

describe('Logo', () => {
  it('renders a logo heading with correct text', () => {
    render(<Logo text="Bonsai" />);
    const logo = screen.getByRole('heading', 'Bonsai');
    expect(logo).toBeInTheDocument();
  });
});
