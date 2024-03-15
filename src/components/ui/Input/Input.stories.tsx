import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],

  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Placeholder',
    type: 'text'
  }
};

export const Password: Story = {
  args: {
    placeholder: 'Placeholder',
    type: 'password'
  }
};

export const Compostion: Story = {
  render: (args) => (
    <Input.Root variant={args.variant}>
      <Input.Label htmlFor="name">Nome e sobrenome</Input.Label>
      <Input {...args} />
      <Input.HelperText>ex:Genilson Fernandes</Input.HelperText>
    </Input.Root>
  )
};
