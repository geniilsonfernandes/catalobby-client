import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import LogIn from '.';

const meta = {
  title: 'Pages/LogIn',
  component: LogIn,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() }
} satisfies Meta<typeof LogIn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
