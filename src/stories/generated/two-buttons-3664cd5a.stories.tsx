import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Group } from '@mantine/core';

const meta: Meta = {
  title: 'Generated/Two Buttons',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Group>
      <Button>First Button</Button>
      <Button>Second Button</Button>
    </Group>
  ),
};

export const WithVariants: Story = {
  render: () => (
    <Group>
      <Button variant="filled">Primary Button</Button>
      <Button variant="outline">Secondary Button</Button>
    </Group>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <Group>
      <Button size="sm">Small Button</Button>
      <Button size="lg">Large Button</Button>
    </Group>
  ),
};