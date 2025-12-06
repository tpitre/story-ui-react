import type { Meta, StoryObj } from '@storybook/react';
import { Button, Group, Stack } from '@mantine/core';

const meta: Meta<typeof Button> = {
  title: 'Mantine/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <Group>
      <Button variant="filled">Filled</Button>
      <Button variant="light">Light</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="transparent">Transparent</Button>
      <Button variant="white">White</Button>
    </Group>
  ),
};

export const Colors: Story = {
  render: () => (
    <Group>
      <Button color="blue">Blue</Button>
      <Button color="cyan">Cyan</Button>
      <Button color="teal">Teal</Button>
      <Button color="green">Green</Button>
      <Button color="red">Red</Button>
      <Button color="orange">Orange</Button>
      <Button color="grape">Grape</Button>
    </Group>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Group align="center">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </Group>
  ),
};

export const WithRadius: Story = {
  render: () => (
    <Group>
      <Button radius="xs">XS Radius</Button>
      <Button radius="sm">SM Radius</Button>
      <Button radius="md">MD Radius</Button>
      <Button radius="lg">LG Radius</Button>
      <Button radius="xl">XL Radius</Button>
    </Group>
  ),
};

export const States: Story = {
  render: () => (
    <Stack>
      <Group>
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </Group>
    </Stack>
  ),
};
