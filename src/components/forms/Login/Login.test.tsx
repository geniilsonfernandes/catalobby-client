import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { BrowserRouter } from 'react-router-dom';
import Login from '.';

describe('Register render', () => {
  test('should render Login form correctly and call onSuccess', async () => {
    const user = userEvent.setup();
    const onSuccess = vi.fn();
    render(
      <BrowserRouter>
        <Login onSuccess={onSuccess} />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Senha');
    const submitbutton = screen.getByText('Login');

    expect(submitbutton).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    await user.type(emailInput, 'email@emai.com');
    await user.type(passwordInput, 'password');
    await user.click(submitbutton);

    expect(onSuccess).toHaveBeenCalled();
  });

  test('should render Login form with errors', async () => {
    const user = userEvent.setup();
    const onSuccess = vi.fn();
    render(
      <BrowserRouter>
        <Login onSuccess={onSuccess} />
      </BrowserRouter>
    );

    const submitbutton = screen.getByText('Login');
    await user.click(submitbutton);

    expect(onSuccess).not.toHaveBeenCalled();

    expect(screen.getByText('Email obrigatório')).toBeInTheDocument();
    expect(screen.getByText('Senha obrigatória')).toBeInTheDocument();
  });
});
