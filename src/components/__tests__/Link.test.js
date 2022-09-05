import { render, screen, act } from '@testing-library/react';
import Link from '../Link';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

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
  it('calls the onclick handler when specified', () => {
    const onClickMock = jest.fn();
    render(<Link link={testLink} text={text} handleClick={onClickMock} />);
    const link = screen.getByRole('link', { name: /test/i });
    userEvent.click(link);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
