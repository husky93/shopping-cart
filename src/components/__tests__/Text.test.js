import { render, screen } from '@testing-library/react';
import Text from '../Text';
import '@testing-library/jest-dom';

const text = 'Test';

describe('Text', () => {
  it('renders text element with correct provided tag and text props', () => {
    render(<Text tag="h1" text={text} />);
    const heading = screen.getByRole('heading', { name: /test/i });
    expect(heading.tagName).toBe('H1');
    expect(heading.textContent).toBe('Test');
  });
});
