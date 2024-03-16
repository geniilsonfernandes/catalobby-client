import type { Meta, StoryObj } from '@storybook/react';
import ColapseMenu from '.';

const meta: Meta<typeof ColapseMenu> = {
  title: 'Components/ColapseMenu',
  component: ColapseMenu,
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
    icon: <div>i</div>,
    isActive: true,
    childrens: [
      {
        title: 'Foo',
        icon: <div>i</div>
      },
      {
        title: 'Bar',
        icon: <div>i</div>,

        childrens: [
          {
            title: 'Foo',
            icon: <div>i</div>
          },
          {
            title: 'Bar',
            icon: <div>i</div>
          }
        ]
      }
    ]
  }
};
