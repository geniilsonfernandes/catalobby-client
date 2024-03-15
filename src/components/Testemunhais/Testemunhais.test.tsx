import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Testemunhais from '.';

const mock = {
  description: 'desc',
  user: {
    name: 'ge',
    role: 'dev'
  }
};
describe('Testemunhais render', () => {
  test('should render Testemunhais props', () => {
    render(<Testemunhais {...mock} />);
    const descriptionEl = screen.getByText('desc');
    const userEl = screen.getByText('ge');
    const roleEl = screen.getByText('dev');

    expect(descriptionEl).toBeInTheDocument();
    expect(userEl).toBeInTheDocument();
    expect(roleEl).toBeInTheDocument();
  });
});
