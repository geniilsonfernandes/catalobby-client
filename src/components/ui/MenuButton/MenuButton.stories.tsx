import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MenuButton from '.';

const meta: Meta<typeof MenuButton> = {
  title: 'UI/MenuButton',
  component: MenuButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},

  args: { onClick: fn() }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Menu Button'
  }
};

export const Active: Story = {
  args: {
    title: 'Menu Button',
    isActive: true
  }
};

export const Collapsed: Story = {
  args: {
    title: 'Menu Button',

    isCollapsed: true
  }
};
