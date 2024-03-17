import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import TermsAndConditions from '.';

describe('TermsAndConditions render', () => {
  test('should render correctly', () => {
    const { container } = render(<TermsAndConditions />);

    expect(container).toMatchSnapshot();
    expect(screen.getByText('Termos de Serviço')).toBeInTheDocument();
    expect(screen.getByText('politicas de privacidade.')).toBeInTheDocument();
  });
});
