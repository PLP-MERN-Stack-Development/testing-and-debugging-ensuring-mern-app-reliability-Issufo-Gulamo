import { render, screen } from '@testing-library/react';
import Hello from '../../components/Hello';

test('renders greeting message', () => {
  render(<Hello name="Issufo" />);
  const message = screen.getByText(/Hello, Issufo!/i);
  expect(message).toBeInTheDocument();
});
