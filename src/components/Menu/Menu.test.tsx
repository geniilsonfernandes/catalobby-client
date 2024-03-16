import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Menu from '.';

describe('Menu render', () => {
  test('should render correctly', () => {
    render(
      <Menu
        title="STORE.DEV"
        menus={[
          {
            icon: <div data-testid="icon">icon</div>,
            title: 'home',
            childrens: []
          }
        ]}
      />
    );
    const title = screen.getByText('STORE.DEV');
    const myAccountButton = screen.getByText('Minha conta');
    const logoutButton = screen.getByText('Logout');
    const homeButton = screen.getByText('home');

    expect(title).toBeInTheDocument();
    expect(myAccountButton).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
  });
});
