import { render, screen } from '@testing-library/react';
import Card from '../components/Card';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const id = '0';

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
        <Card />
      </Router>
    );
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
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
