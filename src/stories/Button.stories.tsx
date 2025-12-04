import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mantine/core';

const meta: Meta<typeof Button> = {
  title: 'Mantine/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'light', 'outline', 'subtle', 'default', 'gradient'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['blue', 'red', 'green', 'yellow', 'gray', 'violet'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'filled',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'light',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'filled',
    color: 'red',
    children: 'Delete',
  },
};
