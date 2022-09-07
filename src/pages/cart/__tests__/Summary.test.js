import { render, screen, act } from '@testing-library/react';
import Summary from '../components/Summary';
import '@testing-library/jest-dom';

const cart = [
  {
    id: '0',
    text: 'Test',
    description: 'Test',
    shortdesc: 'Test',
    price: '200$',
    img: 'test.jpg',
    count: 2,
  },
  {
    id: '2',
    text: 'Test',
    description: 'Test',
    shortdesc: 'Test',
    price: '500$',
    img: 'test.jpg',
    count: 1,
  },
];

describe('Summary', () => {
  it('renders summary section', () => {
    render(<Summary cart={cart} />);
    const summary = screen.getByRole('region');
    expect(summary).toBeInTheDocument();
  });

  it('displays correct price sum', async () => {
    render(<Summary cart={cart} />);
    await act(async () => {
      const totalPrice = await screen.findAllByText('900$');
      expect(totalPrice).toHaveLength(2);
    });
  });
  it('has a button', () => {
    render(<Summary cart={cart} />);
    const btn = screen.getByRole('button', { name: /checkout/i });
    expect(btn).toBeInTheDocument();
  });
});
