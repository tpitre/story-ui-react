import type { Meta, StoryObj } from '@storybook/react';
import { TextInput, Stack, Group } from '@mantine/core';

const meta: Meta<typeof TextInput> = {
  title: 'Mantine/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Stack style={{ width: 300 }}>
      <TextInput label="Your name" placeholder="Enter your name" />
      <TextInput label="Email" placeholder="you@email.com" />
    </Stack>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <TextInput
      label="Email"
      description="We'll never share your email"
      placeholder="you@email.com"
      style={{ width: 300 }}
      inputWrapperOrder={['description', 'input', 'label']}
    />
  ),
};

export const WithError: Story = {
  render: () => (
    <TextInput
      label="Email"
      placeholder="you@email.com"
      error="Invalid email address"
      style={{ width: 300 }}
    />
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack style={{ width: 300 }}>
      <TextInput size="xs" label="Extra small" placeholder="xs size" />
      <TextInput size="sm" label="Small" placeholder="sm size" />
      <TextInput size="md" label="Medium" placeholder="md size" />
      <TextInput size="lg" label="Large" placeholder="lg size" />
      <TextInput size="xl" label="Extra large" placeholder="xl size" />
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack style={{ width: 300 }}>
      <TextInput variant="default" label="Default" placeholder="Default variant" />
      <TextInput variant="filled" label="Filled" placeholder="Filled variant" />
      <TextInput variant="unstyled" label="Unstyled" placeholder="Unstyled variant" />
    </Stack>
  ),
};

export const Disabled: Story = {
  render: () => (
    <TextInput
      label="Disabled input"
      placeholder="Cannot edit this"
      disabled
      style={{ width: 300 }}
    />
  ),
};
