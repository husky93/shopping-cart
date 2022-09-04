import { render, screen } from '@testing-library/react';
import NavLink from '../components/NavLink';
import '@testing-library/jest-dom';

const navLink = '/shop';
const text = 'Shop';

describe('NavLink', () => {
  it('renders a link', () => {
    render(<NavLink link={navLink} text={text} />);
    const link = screen.getByRole('link', { name: text });
    const listItem = screen.getByRole('listitem');

    expect(link).toBeInTheDocument();
    expect(listItem).toBeInTheDocument();
  });

  it('has a correct href argument', () => {
    render(<NavLink link={navLink} text={text} />);
    const link = screen.getByRole('link', { name: text });
    expect(link).toHaveAttribute('href', '/shop');
  });
});
