import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import LogIn from '.';

const meta = {
  title: 'Pages/LogIn',
  component: LogIn,

  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof LogIn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <BrowserRouter>
      <LogIn {...args} />
    </BrowserRouter>
  )
};
