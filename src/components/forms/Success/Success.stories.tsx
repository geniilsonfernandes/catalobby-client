import type { Meta, StoryObj } from '@storybook/react';
import SuccessComponent from '.';

const meta = {
  title: 'Form/SuccessComponent',
  component: SuccessComponent,
  parameters: {
    layout: 'centered'
  },
  argTypes: {},
  args: {}
} satisfies Meta<typeof SuccessComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
