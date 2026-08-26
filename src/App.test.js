import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header nav links', () => {
  render(<App />);
  const publishLink = screen.getByText(/論文發表/i);
  expect(publishLink).toBeInTheDocument();
});
