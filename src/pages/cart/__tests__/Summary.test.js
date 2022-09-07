import { render, screen } from '@testing-library/react';
import Summary from '../components/Summary';
import '@testing-library/jest-dom';

const cart = [
  {
    count: 2,
    description: 'Test',
    id: '1',
    img: 'test.jpg',
    price: '150$',
    shortdesc: 'Test.',
    text: 'Test',
  },
  {
    count: 1,
    description: 'Test',
    id: '1',
    img: 'test.jpg',
    price: '400$',
    shortdesc: 'Test.',
    text: 'Test',
  },
  {},
];

describe('Summary', () => {
  it('renders summary section', () => {
    render(<Summary cart={cart} />);
    const summary = screen.getByRole('region');
    expect(summary).toBeInTheDocument();
  });

  it('displays correct price sum', () => {
    render(<Summary cart={cart} />);
    const totalPrice = screen.getByText('700$');
    expect(totalPrice).toBeInTheDocument();
  });
  it('has a button', () => {
    render(<Summary cart={cart} />);
    const btn = screen.getByText('button');
    expect(btn).toBeInTheDocument();
  });
});
