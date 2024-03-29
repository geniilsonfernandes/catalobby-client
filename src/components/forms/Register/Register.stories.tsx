import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Register from '.';

const meta = {
  title: 'Form/Register',
  component: Register,
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
} satisfies Meta<typeof Register>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSuccess: () => {}
  },
  render: (args) => (
    <BrowserRouter>
      <Register {...args} />
    </BrowserRouter>
  )
};
