import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Brand from '.';

describe('Brand render', () => {
  test('should render brand with title', () => {
    render(<Brand />);

    const brand = screen.getByTitle('Catalobby');

    expect(brand).toBeInTheDocument();
  });

  test('should render brand without title', async () => {
    render(<Brand withoutTitle />);

    const brand = screen.queryByText('Catalobby');

    expect(brand).not.toBeInTheDocument();
  });
});
