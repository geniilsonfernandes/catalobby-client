import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },


  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
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
      <Input placeholder='Nome e sobrenome' type='text' id='name' {...args}/>
      <Input.HelperText>ex:Genilson Fernandes</Input.HelperText>
    </Input.Root>
  )
};
