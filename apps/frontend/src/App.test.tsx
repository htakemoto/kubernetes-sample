import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Edit', () => {
  render(<App />);
  const linkElement = screen.getByText(/Edit/i);
  expect(linkElement).toBeInTheDocument();
});
