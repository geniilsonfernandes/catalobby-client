import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Button from '.';

describe('Button render', () => {
  test('should render button with variant fill', () => {
    render(<Button variant="fill">foo</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-primary-100');
  });

  test('should render button with variant outline', () => {
    render(<Button variant="outline">foo</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('border border-primary-100');
  });

  test('should render button with variant ghost', () => {
    render(<Button variant="ghost">foo</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-transparent');
  });

  test('should render button with width full', () => {
    render(<Button width="full">foo</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('w-full');
  });

  test('should render button with width auto', () => {
    render(<Button width="auto">foo</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('w-auto');
  });
});
