import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SingUp from '.';

const meta = {
  title: 'Pages/SingUp',
  component: SingUp,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() }
} satisfies Meta<typeof SingUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
