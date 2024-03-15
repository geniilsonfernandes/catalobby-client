import type { Meta, StoryObj } from '@storybook/react';
import Testemunhais from '.';

const mock = {
  description: 'this is a testemunhais about a testemunhais',
  user: {
    name: 'ge',
    role: 'dev'
  }
};

const meta: Meta<typeof Testemunhais> = {
  title: 'Components/Testemunhais',
  component: Testemunhais,
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...mock
  }
};
