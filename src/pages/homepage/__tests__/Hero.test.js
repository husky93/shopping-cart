import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';
import '@testing-library/jest-dom';

describe('Hero', () => {
  it('renders hero', () => {
    render(<Hero />);
    const section = screen.getByRole('region', { name: 'Hero' });
    expect(section).toBeInTheDocument();
  });
  it('has a heading', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });
  it('has a subtext', () => {
    render(<Hero />);
    const subtext = screen.getByRole('paragraph');
    expect(subtext).toBeInTheDocument();
  });
  it('has a button', () => {
    render(<Hero />);
    const button = screen.getByRole('button', { name: 'Find Your Tree' });
    expect(button).toBeInTheDocument();
  });
});
