import type { Meta, StoryObj } from '@storybook/react';
import Success from '.';

const meta = {
  title: 'Form/Success',
  component: Success,
  parameters: {
    layout: 'centered'
  },
  argTypes: {},
  args: {}
} satisfies Meta<typeof Success>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSuccess: () => {}
  }
};
