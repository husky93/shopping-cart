import { render, screen } from '@testing-library/react';
import FooterNav from '../components/FooterNav';
import '@testing-library/jest-dom';
jest.mock('react-router-dom', () => ({
  NavLink: () => <a href="/">Test</a>,
}));

describe('FooterNav', () => {
  it('has 5 links', () => {
    render(<FooterNav />);
    const links = screen.queryAllByRole('link');
    expect(links.length).toBe(5);
  });
});
