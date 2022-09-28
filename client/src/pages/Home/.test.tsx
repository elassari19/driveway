import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });
  it('should show Home text', () => {
    expect(screen.getByText('Home text')).toBeTruthy();
  });
});
