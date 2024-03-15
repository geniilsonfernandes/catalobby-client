import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { BrowserRouter } from 'react-router-dom';
import Register from '.';

describe('Register render', () => {
  test('should render Register form correctly', () => {
    render(
      <BrowserRouter>
        <Register onSuccess={() => {}} />
      </BrowserRouter>
    );

    const nameInput = screen.getByPlaceholderText('Nome e sobrenome');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Senha');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
