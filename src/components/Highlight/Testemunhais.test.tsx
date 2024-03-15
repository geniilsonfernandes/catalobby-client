import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Highlight from '.';

const mock = {
  description: 'desc',
  title: 'title'
};
describe('Testemunhais render', () => {
  test('should render Testemunhais props', () => {
    render(<Highlight {...mock} />);
    const descriptionEl = screen.getByText('desc');
    const titleEl = screen.getByText('title');

    expect(titleEl).toBeInTheDocument();
    expect(descriptionEl).toBeInTheDocument();
  });
});
