import type { Meta, StoryObj } from '@storybook/react';
import Brand from '.';

const meta: Meta<typeof Brand> = {
  title: 'UI/Brand',
  component: Brand,
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const WithoutTitle: Story = {
  args: {
    withoutTitle: true
  }
};
