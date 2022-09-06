import { render, screen } from '@testing-library/react';
import Counter from '../Counter';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
  it('renders two buttons', () => {
    render(<Counter count={0} />);
    const buttons = screen.queryAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
  it('renders counter text', () => {
    render(<Counter count={0} />);
    const counter = screen.getByText('0');
    expect(counter).toBeInTheDocument();
  });
  it('calls the increment and decrement handlers', () => {
    let count = 0;
    const handleIncrement = jest.fn(count++);
    const handleDecrement = jest.fn(count--);
    render(
      <Counter
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    );
    const buttons = screen.queryAllByRole('button');
    userEvent.click(buttons[0]);
    userEvent.click(buttons[1]);
    expect(handleIncrement).toHaveBeenCalledTimes(1);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });
});
