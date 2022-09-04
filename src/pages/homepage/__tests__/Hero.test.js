import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from '../components/Hero';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Hero', () => {
  it('renders hero', () => {
    render(
      <Router>
        <Hero />
      </Router>
    );
    const section = screen.getByRole('region', { name: 'Hero' });
    expect(section).toBeInTheDocument();
  });
  it('has a heading', () => {
    render(
      <Router>
        <Hero />
      </Router>
    );
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });
  it('has a subtext', () => {
    render(
      <Router>
        <Hero />
      </Router>
    );
    const subtext = screen.getByText(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    );
    expect(subtext).toBeInTheDocument();
  });
  it('has a button', () => {
    render(
      <Router>
        <Hero />
      </Router>
    );
    const button = screen.getByRole('button', { name: 'Find Your Tree' });
    expect(button).toBeInTheDocument();
  });
  it('button redirects user to shop page when clicked', () => {
    render(
      <Router>
        <Hero />
      </Router>
    );
    const button = screen.getByRole('button', { name: 'Find Your Tree' });
    userEvent.click(button);
    expect(global.window.location.href).toContain('/shop');
  });
});
