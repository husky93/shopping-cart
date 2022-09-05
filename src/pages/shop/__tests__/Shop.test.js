import { render, screen } from '@testing-library/react';
import Shop from '../Shop';
import '@testing-library/jest-dom';

jest.mock('../../../sections/header/Header', () => () => (
  <header data-testid="header"></header>
));

jest.mock('../../../sections/footer/Footer', () => () => (
  <footer data-testid="footer"></footer>
));

describe('Shop', () => {
  it('renders shop component', () => {
    render(<Shop />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
  it('renders header component inside', () => {
    render(<Shop />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
  it('renders footer component inside', () => {
    render(<Shop />);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
});
