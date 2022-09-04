import { render, screen } from '@testing-library/react';
import Link from '../Link';
import '@testing-library/jest-dom';

const text = 'Test';
const testLink = '/link';

describe('Link', () => {
  it('renders a link', () => {
    render(<Link link={testLink} text={text} />);
    const link = screen.getByRole('link', { name: /test/i });
    expect(link).toBeInTheDocument();
  });
  it('has correct href argument', () => {
    render(<Link link={testLink} text={text} />);
    const link = screen.getByRole('link', { name: /test/i });
    expect(link).toHaveAttribute('href', '/link');
  });
  it('displays correct text', () => {
    render(<Link link={testLink} text={text} />);
    const link = screen.getByRole('link', { name: /test/i });
    expect(link.textContent).toBe('Test');
  });
});
