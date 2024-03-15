import { act, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Input from '.';

describe('Input render', () => {
  test('should render input with variant outline', () => {
    render(<Input placeholder="name" />);
    const inputEl = screen.getByPlaceholderText('name');

    expect(inputEl).toBeInTheDocument();
  });

  test('should render input with composition pattern', () => {
    render(
      <Input.Root>
        <Input.Label htmlFor="name">Nome e sobrenome</Input.Label>
        <Input placeholder="name" />
        <Input.HelperText>ex:Genilson Fernandes</Input.HelperText>
      </Input.Root>
    );
    const labelEl = screen.getByText('Nome e sobrenome');
    const inputEl = screen.getByPlaceholderText('name');
    const helperTextEl = screen.getByText('ex:Genilson Fernandes');

    expect(inputEl).toBeInTheDocument();
    expect(labelEl).toBeInTheDocument();
    expect(helperTextEl).toBeInTheDocument();
  });

  test('should render input password', () => {
    render(<Input type="password" placeholder="password" />);
    const inputEl = screen.getByPlaceholderText('password');

    const buttonTogglePassword = screen.getByLabelText('toggle password');
    expect(inputEl).toHaveAttribute('type', 'password');
    act(() => buttonTogglePassword.click());
    expect(inputEl).toHaveAttribute('type', 'text');
    expect(inputEl).toBeInTheDocument();
  });
});
