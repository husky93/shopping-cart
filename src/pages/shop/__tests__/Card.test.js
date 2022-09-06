import { render, screen } from '@testing-library/react';
import Card from '../components/Card';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const id = '0';
const text = 'Test text';
const description = 'Test description';
const price = '23$';
const image = 'test.jpg';

describe('Card', () => {
  it('renders products section', () => {
    render(
      <Router>
        <Card />
      </Router>
    );
    const card = screen.getByRole('figure');
    expect(card).toBeInTheDocument();
  });
  it('has an image', () => {
    render(
      <Router>
        <Card img={image} />
      </Router>
    );
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
  it('renders provided text, description and price', () => {
    render(
      <Router>
        <Card text={text} description={description} price={price} />
      </Router>
    );
    const textNode = screen.getByText('Test text');
    const descNode = screen.getByText('Test description');
    const priceNode = screen.getByText('23$');

    expect(textNode).toBeInTheDocument();
    expect(descNode).toBeInTheDocument();
    expect(priceNode).toBeInTheDocument();
  });
  it('card redirects user to correct page when clicked', () => {
    render(
      <Router>
        <Card id={id} />
      </Router>
    );
    const card = screen.getByRole('link');
    userEvent.click(card);
    expect(global.window.location.href).toContain('/products/0');
  });
});
