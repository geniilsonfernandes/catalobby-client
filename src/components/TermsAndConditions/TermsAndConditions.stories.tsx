import type { Meta, StoryObj } from '@storybook/react';
import TermsAndConditions from '.';

const meta: Meta<typeof TermsAndConditions> = {
  title: 'Components/TermsAndConditions',
  component: TermsAndConditions,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
