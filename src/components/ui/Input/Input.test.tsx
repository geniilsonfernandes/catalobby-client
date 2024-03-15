import { act, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Input, * as InputWrapper from '.';

describe('Input render', () => {
  test('should render input with variant outline', () => {
    render(<Input placeholder="name" />);
    const inputEl = screen.getByPlaceholderText('name');

    expect(inputEl).toBeInTheDocument();
  });

  test('should render input with composition pattern', () => {
    render(
      <InputWrapper.Root>
        <InputWrapper.Label htmlFor="name">Nome e sobrenome</InputWrapper.Label>
        <Input placeholder="name" />
        <InputWrapper.HelperText>ex:Genilson Fernandes</InputWrapper.HelperText>
      </InputWrapper.Root>
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
