import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {},
  render: (args) => (
    <div className="flex justify-center w-[300px]">
      <Button {...args}>Button</Button>
    </div>
  ),
  args: { onClick: fn() }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonFill: Story = {
  args: {
    children: 'Button Fill',
    variant: 'fill'
  }
};

export const ButtonOutline: Story = {
  args: {
    children: 'Button Outline',
    variant: 'outline'
  }
};

export const ButtonGhost: Story = {
  args: {
    children: 'Button Ghost',
    variant: 'ghost'
  }
};

export const ButtonFull: Story = {
  args: {
    children: 'Button Full',
    width: 'full'
  }
};

export const ButtonAuto: Story = {
  args: {
    children: 'Button Auto',
    width: 'auto'
  }
};
