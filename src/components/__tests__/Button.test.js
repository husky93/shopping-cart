import { render, screen } from '@testing-library/react';
import Button from '../Button';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

const text = 'Test';

describe('Button', () => {
  it('renders a button with a specified text', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock} text={text} className="btn" />);
    const btn = screen.getByRole('button', { name: /test/i });

    expect(btn).toBeInTheDocument();
    expect(btn.textContent).toBe('Test');
  });

  it('calls the provided callback function', () => {
    const onClickMock = jest.fn();
    render(<Button handleClick={onClickMock} text={text} className="btn" />);
    const btn = screen.getByRole('button', { name: /test/i });

    userEvent.click(btn);
    expect(onClickMock).toHaveBeenCalledTimes(1);
    userEvent.click(btn);
    expect(onClickMock).toHaveBeenCalledTimes(2);
  });
});
