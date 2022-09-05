import { render, screen } from '@testing-library/react';
import Card from '../components/Card';
import userEvent from '@testing-library/user-event';

describe('Card', () => {
  it('renders products section', () => {
    render(<Card />);
    const card = screen.getByRole('figure');
    expect(card).toBeInTheDocument();
  });
  it('has an image', () => {
    render(<Card />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
  it('calls the click handler on click event', () => {
    const mockClickHandler = jest.fn();
    render(<Card handleClick={mockClickHandler} />);
    const card = screen.getByRole('figure');
    userEvent.click(card);
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
});
