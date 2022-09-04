import { render, screen } from '@testing-library/react';
import Homepage from '../Homepage';
import '@testing-library/jest-dom';

jest.mock('../components/Hero', () => () => (
  <section data-testid="hero"></section>
));

jest.mock('../../../sections/header/Header', () => () => (
  <header data-testid="header"></header>
));

describe('Homepage', () => {
  it('renders homepage component', () => {
    render(<Homepage />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
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
});
