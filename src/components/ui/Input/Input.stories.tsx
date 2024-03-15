import type { Meta, StoryObj } from '@storybook/react';
import Input, * as InputWrapper from '.';

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

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    type: 'text'
  },
  render: (args) => (
    <InputWrapper.Root variant={args.variant}>
      <InputWrapper.Label htmlFor="name">Nome e sobrenome</InputWrapper.Label>
      <Input placeholder="Nome e sobrenome" type="text" id="name" {...args} />
      <InputWrapper.HelperText>ex:Genilson Fernandes</InputWrapper.HelperText>
    </InputWrapper.Root>
  )
};

export const Password: Story = {
  args: {
    placeholder: 'Placeholder',
    type: 'password'
  }
};

export const Compostion: Story = {
  render: (args) => (
    <InputWrapper.Root variant={args.variant}>
      <InputWrapper.Label htmlFor="name">Nome e sobrenome</InputWrapper.Label>
      <Input placeholder="Nome e sobrenome" type="text" id="name" {...args} />
      <InputWrapper.HelperText>ex:Genilson Fernandes</InputWrapper.HelperText>
    </InputWrapper.Root>
  )
};
