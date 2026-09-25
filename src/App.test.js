import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main navigation links', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: 'Latest articles' }),
  ).toBeInTheDocument();
});
