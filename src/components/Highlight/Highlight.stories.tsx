import type { Meta, StoryObj } from '@storybook/react';
import Highlight from '.';

const meta: Meta<typeof Highlight> = {
  title: 'Components/Highlight',
  component: Highlight,
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: 'this is a description',
    title: 'this a title'
  }
};
