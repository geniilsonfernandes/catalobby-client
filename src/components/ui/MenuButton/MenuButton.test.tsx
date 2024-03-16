import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import MenuButton from '.';

describe('MenuButton render', () => {
  test('should render button with props', () => {
    render(<MenuButton title="foo" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('should render button active', () => {
    render(<MenuButton title="foo" isActive={true} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gray-50');
  });
  test('should render button when isChildren', () => {
    render(<MenuButton title="foo" isActive={true} isChildren />);
    const buttonText = screen.getByText('foo');
    expect(buttonText).toHaveClass('text-slate-400');
  });
  test('should render left icon when isCollapsed', () => {
    render(
      <MenuButton
        title="foo"
        isActive={true}
        isCollapsed
        iconLeft={<div data-testid="iconLeft">iconLeft</div>}
      />
    );
    const iconLeft = screen.getByTestId('iconLeft');
    expect(iconLeft).toBeInTheDocument();
  });
});
