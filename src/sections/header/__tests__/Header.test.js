import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Product', () => {
  it('renders a header', () => {
    render(<Header />);
  });
});
