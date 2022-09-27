import React from 'react';
import { render, screen } from '@testing-library/react';
import { Sample } from './.spec';

describe('Sample', () => {
  beforeEach(() => {
    render(<Sample />);
  });
  it('should show Sample text', () => {
    expect(screen.getByText('Sample text')).toBeTruthy();
  });
});
