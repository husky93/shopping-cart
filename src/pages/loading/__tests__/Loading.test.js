import { render, screen } from '@testing-library/react';
import Loading from '../Loading';
import '@testing-library/jest-dom';

jest.mock('../../../sections/header/Header', () => () => (
  <header data-testid="header"></header>
));

jest.mock('../../../sections/footer/Footer', () => () => (
  <footer data-testid="footer"></footer>
));

describe('Loading', () => {
  it('renders loading page', () => {
    render(<Loading />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
  it('renders header component inside', () => {
    render(<Loading />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
  it('renders footer component inside', () => {
    render(<Loading />);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
});
