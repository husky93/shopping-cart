import { render, screen } from '@testing-library/react';
import Homepage from '../Homepage';

describe('Homepage', () => {
  it('renders homepage component', () => {
    render(<Homepage />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});
