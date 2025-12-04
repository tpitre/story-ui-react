import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Stack } from '@mantine/core';

const meta = {
  title: 'Generated/Button with Variants and Hover States',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryHoverDemo: Story = {
  args: {
    children: 'Hover Over Me (Primary)',
    variant: 'filled',
    color: 'blue',
  },
};

export const SecondaryHoverDemo: Story = {
  args: {
    children: 'Hover Over Me (Secondary)',
    variant: 'outline',
    color: 'blue',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'filled',
    color: 'blue',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'outline',
    color: 'blue',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    variant: 'filled',
    color: 'red',
  },
};

export const AllVariants: Story = {
  render: () => (
    <Stack gap="md" align="center">
      <Button variant="filled" color="blue">
        Primary Button
      </Button>
      <Button variant="outline" color="blue">
        Secondary Button
      </Button>
      <Button variant="filled" color="red">
        Danger Button
      </Button>
    </Stack>
  ),
};

export const DangerHoverDemo: Story = {
  args: {
    children: 'Hover Over Me (Danger)',
    variant: 'filled',
    color: 'red',
  },
};