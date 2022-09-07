import { render, screen, act } from '@testing-library/react';
import CartItem from '../components/CartItem';
import '@testing-library/jest-dom';

const textA = 'Bonsai';
const image = 'product-2.jpg';

describe('Cart Item', () => {
  it('renders cart item', async () => {
    render(<CartItem img={image} />);
    await act(async () => {
      const cartItem = await screen.findByRole('listitem');
      expect(cartItem).toBeInTheDocument();
    });
  });
  it('has a text', async () => {
    render(<CartItem img={image} text={textA} />);
    await act(async () => {
      const text = await screen.findByText('Bonsai');
      expect(text).toBeInTheDocument();
    });
  });
  it('has an image', async () => {
    render(<CartItem img={image} />);
    await act(async () => {
      const img = await screen.findByRole('img');
      expect(img).toBeInTheDocument();
    });
  });
  it('has a button', async () => {
    render(<CartItem img={image} />);
    await act(async () => {
      const button = await screen.findByRole('button', { name: /delete/i });
      expect(button).toBeInTheDocument();
    });
  });
});
