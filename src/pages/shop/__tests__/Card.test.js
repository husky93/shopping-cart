import { render, screen, act } from '@testing-library/react';
import Card from '../components/Card';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

const id = '0';
const text = 'Test text';
const description = 'Test description';
const price = '23$';
const image = 'product-1.jpg';

describe('Card', () => {
  it('renders products section', async () => {
    render(
      <Router>
        <Card text={text} description={description} price={price} img={image} />
      </Router>
    );
    await act(async () => {
      const card = await screen.findByRole('figure');
      expect(card).toBeInTheDocument();
    });
  });
  it('has an image', async () => {
    render(
      <Router>
        <Card text={text} description={description} price={price} img={image} />
      </Router>
    );

    await act(async () => {
      const img = await screen.findByRole('img');
      expect(img).toBeInTheDocument();
    });
  });
  it('renders provided text, description and price', async () => {
    render(
      <Router>
        <Card text={text} description={description} price={price} img={image} />
      </Router>
    );

    const textNode = await screen.findByText('Test text');
    const descNode = await screen.findByText('Test description');
    const priceNode = await screen.findByText('23$');

    expect(textNode).toBeInTheDocument();
    expect(descNode).toBeInTheDocument();
    expect(priceNode).toBeInTheDocument();
  });
  it('card redirects user to correct page when clicked', async () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Card id={id} img={image} />
      </Router>
    );
    let card;
    await act(async () => {
      card = await screen.findByRole('link');
    });
    userEvent.click(card);
    expect(global.window.location.href).toContain('/product/0');
  });
});
