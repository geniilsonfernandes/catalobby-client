import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import Success from '.';

const props = {
  title: 'Parabéns!',
  description: 'Seu cadastro foi concluído com sucesso!',
  callbackText: 'Voltar'
};

describe('Success render', () => {
  test('should render correctly and should call function', async () => {
    const user = userEvent.setup();
    const cb = vi.fn();
    render(<Success {...props} callback={cb} />);

    const button = screen.getByText(props.callbackText);
    const title = screen.getByText(props.title);
    const description = screen.getByText(props.description);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    await user.click(button);
    expect(cb).toHaveBeenCalled();
  });
});
