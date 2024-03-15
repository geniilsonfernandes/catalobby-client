import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '.';

const meta = {
  title: 'Form/Login',
  component: Login,
  parameters: {
    layout: 'centered'
  },
  argTypes: {},
  args: {}
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSuccess: () => {}
  },
  render: (args) => (
    <BrowserRouter>
      <Login {...args} />
    </BrowserRouter>
  )
};
