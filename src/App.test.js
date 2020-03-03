import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react typography', () => {
  const { getByText } = render(<App />);
  const element = getByText(/Pokemon Go XP Calculator/i);
  expect(element).toBeInTheDocument();
});
