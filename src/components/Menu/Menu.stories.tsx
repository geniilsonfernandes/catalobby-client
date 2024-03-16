import { storeMenu } from '@/shared/menus';
import type { Meta, StoryObj } from '@storybook/react';
import Menu from '.';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Menu Button',
    menus: storeMenu
  }
};
