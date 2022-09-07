import { render, screen, act } from '@testing-library/react';
import CartItem from '../components/CartItem';
import '@testing-library/jest-dom';

const textA = 'Bonsai';
const image = 'product-2.jpg';

describe('Cart Item', () => {
  it('renders cart item', () => {
    render(<CartItem img={image} />);
    const cartItem = screen.getByRole('listitem');
    expect(cartItem).toBeInTheDocument();
  });
  it('has a text', () => {
    render(<CartItem img={image} text={textA} />);
    const text = screen.getByText('Bonsai');
    expect(text).toBeInTheDocument();
  });
  it('has an image', () => {
    render(<CartItem img={image} />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
  it('has a button', () => {
    render(<CartItem img={image} />);
    const button = screen.getByRole('button', { name: /delete/i });
    expect(button).toBeInTheDocument();
  });
});
