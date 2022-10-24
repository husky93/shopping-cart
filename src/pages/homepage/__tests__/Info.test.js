import { render, screen } from '@testing-library/react';
import Info from '../components/Info';
import '@testing-library/jest-dom';
import 'intersection-observer';

describe('Info', () => {
  it('renders info section', () => {
    render(<Info />);
    const section = screen.getByRole('region', { name: 'Info' });
    expect(section).toBeInTheDocument();
  });
  it('has a heading', () => {
    render(<Info />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });
  it('has a subtext', () => {
    render(<Info />);
    const subtext = screen.getByText(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    );
    expect(subtext).toBeInTheDocument();
  });
  it('has an image', () => {
    render(<Info />);
    const img = screen.getByRole('img', { name: 'Bonsai tree' });
    expect(img).toBeInTheDocument();
  });
});
