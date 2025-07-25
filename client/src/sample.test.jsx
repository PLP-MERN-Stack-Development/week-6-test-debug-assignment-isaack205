import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

function DummyComponent() {
  return <div>Hello, Jest!</div>;
}

test('renders DummyComponent', () => {
  render(<DummyComponent />);
  expect(screen.getByText(/hello, jest!/i)).toBeInTheDocument();
});