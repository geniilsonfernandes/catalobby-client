import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, test } from 'vitest';

import ColapseMenu from '.';

describe('ColapseMenu render', () => {
  beforeEach(() => {
    render(
      <ColapseMenu
        icon={<div data-testid="icon">icon</div>}
        title="foo"
        childrens={[
          {
            icon: <div data-testid="icon2">icon2</div>,
            title: 'bar'
          }
        ]}
      />
    );
  });

  test('should render ColapseMenu with props', () => {
    const button = screen.getByText('foo');
    expect(button).toBeInTheDocument();
  });

  test('should expande and collapse ColapseMenu', async () => {
    const user = userEvent.setup();

    const button = screen.getByText('foo');
    const submenu = screen.getByLabelText('submenu foo');
    expect(submenu).toHaveAttribute('aria-expanded', 'false');
    await user.click(button);
    expect(submenu).toHaveAttribute('aria-expanded', 'true');
  });
});
