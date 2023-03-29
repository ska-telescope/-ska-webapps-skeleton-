import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('displays the exampleComponent', () => {
    render(<App />);
    expect(screen.getByTestId('dataLoginId')).toBeTruthy();
  });
});
