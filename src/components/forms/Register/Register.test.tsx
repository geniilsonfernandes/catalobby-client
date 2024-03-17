import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import Register from '.';

describe('Register render', () => {
  test('should render Register form correctly and call onSuccess', async () => {
    const user = userEvent.setup();
    const onSuccess = vi.fn();
    render(
      <BrowserRouter>
        <Register onSuccess={onSuccess} />
      </BrowserRouter>
    );

    const nameInput = screen.getByPlaceholderText('Nome e sobrenome');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Senha');
    const submitbutton = screen.getByText('Criar conta');

    await user.type(nameInput, 'Nome e sobrenome');
    await user.type(emailInput, 'email@emai.com');
    await user.type(passwordInput, 'password');
    await user.click(submitbutton);

    expect(onSuccess).toHaveBeenCalled();

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('should render Register form with errors', async () => {
    const user = userEvent.setup();
    const onSuccess = vi.fn();
    render(
      <BrowserRouter>
        <Register onSuccess={onSuccess} />
      </BrowserRouter>
    );

    const submitbutton = screen.getByText('Criar conta');
    await user.click(submitbutton);

    expect(onSuccess).not.toHaveBeenCalled();

    expect(screen.getByText('Nome obrigatório')).toBeInTheDocument();
    expect(screen.getByText('Email obrigatório')).toBeInTheDocument();
    expect(screen.getByText('Senha obrigatória')).toBeInTheDocument();
  });
});
