import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { BrowserRouter } from 'react-router-dom';
import Login from '.';

describe('Register render', () => {
  test('should render Login form correctly', () => {
    render(
      <BrowserRouter>
        <Login onSuccess={() => {}} />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Senha');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
