import { render, screen } from '@testing-library/react';
import Header from '../Header';
import '@testing-library/jest-dom';
jest.mock('../components/Navbar', () => () => <nav data-testid="header"></nav>);

describe('Header', () => {
  it('renders a header element', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
});
