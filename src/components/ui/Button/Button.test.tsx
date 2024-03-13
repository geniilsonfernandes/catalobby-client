import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Button from '.';

describe('Button', () => {
  test('should render button with primary color', () => {
    render(<Button>foo</Button>);
    expect(screen.getByText('foo')).toHaveClass('bg-primary-100');
  });
});
