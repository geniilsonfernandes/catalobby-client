import type { Meta, StoryObj } from '@storybook/react';
import Register from '.';

const meta = {
  title: 'Form/Register',
  component: Register,
  parameters: {
    layout: 'centered'
  },
  argTypes: {},
  args: {}
} satisfies Meta<typeof Register>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onSuccess: () => {}
  }
};
