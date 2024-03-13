import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '.';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {},
  args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button'
  }
};
