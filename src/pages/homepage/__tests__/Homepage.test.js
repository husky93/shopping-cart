import { render, screen, waitFor } from '@testing-library/react';
import Homepage from '../Homepage';
import '@testing-library/jest-dom';

jest.mock('../components/Hero', () => () => (
  <section data-testid="hero"></section>
));

jest.mock('../components/Info', () => () => (
  <section data-testid="info"></section>
));

jest.mock('../../../sections/header/Header', () => () => (
  <header data-testid="header"></header>
));

jest.mock('../../../sections/footer/Footer', () => () => (
  <footer data-testid="footer"></footer>
));

global.scrollTo = jest.fn();

describe('Homepage', () => {
  it('renders homepage component', async () => {
    render(<Homepage />);
    await waitFor(() => {
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });
  });
  it('renders header component inside', () => {
    render(<Homepage />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
  it('renders hero component inside', () => {
    render(<Homepage />);
    const hero = screen.getByTestId('hero');
    expect(hero).toBeInTheDocument();
  });
  it('renders info component inside', () => {
    render(<Homepage />);
    const info = screen.getByTestId('info');
    expect(info).toBeInTheDocument();
  });
  it('renders footer component inside', () => {
    render(<Homepage />);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
});
